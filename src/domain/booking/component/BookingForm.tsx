import { Collapse, TextField, Theme, Typography } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import { makeStyles } from '@material-ui/styles'
import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import { ErrorFieldForm } from '../../../component/ErrorFieldForm'
import { PrimaryButton } from '../../../component/PrimaryButton'
import { BlockedDay, Calendar } from '../../../containers/calendar/Calendar'
import customTheme from '../../../theme'
import { BOOK_NOW, EDITABLE_MODE, PAX_VALIDATE, PER_NIGHT, REQUIRED_RANGE } from '../../../utils/constants'
import { TitlePanel } from '../../ad/component/detail/TitlePanel'
import { Range } from '../utils'

const validationSchema = Yup.object({
	pax: Yup.number().positive(PAX_VALIDATE)
})

interface Props {
	blockedDays: BlockedDay[];
	adTitle: string;
	adRanking: number;
	price: number;
	range: Range | undefined;
	onChangeRange: (range: Range) => void;
	handleValidRangeAlert: () => void;
	validRange: boolean;
	onSubmit: (pax: number) => void;
}

const BookingForm = ({ blockedDays, adTitle, adRanking, validRange, price, range, onChangeRange, handleValidRangeAlert, onSubmit }: Props) => {
	const classes = useStyles();

	return (
		<Formik
			initialValues={{ pax: 0 }}
			validationSchema={validationSchema}
			onSubmit={(values) => {
				if (range && range.checkin && range.checkout) {
					onSubmit(values.pax)
				} else handleValidRangeAlert();
			}}
		>
			{({ values, errors, touched, handleChange }) =>
				<Form>
					<div className={classes.container}>
						<div>
							<Calendar blockedDayList={blockedDays} onChangeRange={onChangeRange} mode={EDITABLE_MODE} />
							<Collapse in={!validRange}>
								<Alert severity="error">{REQUIRED_RANGE}</Alert>
							</Collapse>
						</div>
						<div className={classes.fields}>
							<TitlePanel title={adTitle} ranking={adRanking} />
							<TextField
								id="pax"
								name='pax'
								value={values.pax}
								label="Guests"
								type="number"
								variant="outlined"
								margin='dense'
								size='small'
								onChange={handleChange}
							/>
							{errors.pax && touched.pax ? (<ErrorFieldForm name='pax' />) : null}
							<Typography className={classes.price} color='textPrimary' variant='h5' >{`$${price} ${PER_NIGHT}`}</Typography>
							<div className={classes.button}>
								<PrimaryButton type='submit' >{BOOK_NOW}</PrimaryButton>
							</div>
						</div>
					</div>
				</Form>
			}
		</Formik>
	)
}

export default BookingForm;

const useStyles = makeStyles((theme: Theme) => ({
	container: {
		display: 'flex',
		flexFlow: 'row wrap',
		alignItems: 'baseline',
		justifyContent: 'center',
		marginTop: customTheme.spacing.margin.small,
		padding: theme.spacing(1),
	},
	fields: {
		margin: `0 ${customTheme.spacing.margin.small}`,
		flexDirection: 'column',
		justifyContent: 'center',
		[theme.breakpoints.down('md')]: {
			marginTop: theme.spacing(2)
		}
	},
	price: {
		marginTop: theme.spacing(1),
	},
	button: {
		marginTop: theme.spacing(2),
		display: 'inline-block'
	}
})
);