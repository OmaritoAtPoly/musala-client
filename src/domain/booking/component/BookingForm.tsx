import { TextField, Theme, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { Form, Formik } from 'formik'
import React from 'react'
import { PrimaryButton } from '../../../component/PrimaryButton'
import { PER_NIGHT, BOOK_NOW } from '../../../utils/constants'
import { TitlePanel } from '../../ad/component/detail/TitlePanel'
import { Range } from '../utils'
import { Calendar } from '../../../containers/calendar/Calendar'
import { Moment } from 'moment'


interface Props {
	blockedDays: Moment[];
	adTitle: string;
	adRanking: number;
	price: number;
	range: Range | undefined;
	onChangeRange: (range: Range) => void;
	onSubmit: (values: any) => void;
}

const BookingForm = ({ blockedDays, adTitle, adRanking, price, range, onChangeRange, onSubmit }: Props) => {
	const classes = useStyles();

	return (
		<Formik
			initialValues={{ range, pax: 0 }}
			onSubmit={(values) => {
				onSubmit(values)
			}}
		>
			{({ values, handleChange }) =>
				<Form>
					<div className={classes.container}>
						<Calendar blockedDays={blockedDays} onChangeRange={onChangeRange} />
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
		marginTop: '1rem',
		padding: theme.spacing(1),
	},
	fields: {
		margin: '0 1rem',
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