import { Collapse, FormControlLabel, Radio, RadioGroup, Theme, Typography } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import { makeStyles } from '@material-ui/styles'
import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import { ErrorFieldForm } from '../../../component/ErrorFieldForm'
import { PrimaryButton } from '../../../component/PrimaryButton'
import { BlockedDay, Calendar } from '../../../containers/calendar/Calendar'
import customTheme from '../../../theme'
import { ACTION_VALIDATE, AVAILABILITY, AVAILABLE, BLOCKED, REQUIRED_RANGE, SUBMIT } from '../../../utils/constants'
import { Range } from '../../../utils/type'
import { TitlePanel } from '../../ad/component/detail/TitlePanel'

interface Props {
	blockedDays: BlockedDay[];
	adTitle: string;
	adRanking: number;
	range: Range | undefined;
	onChangeRange: (range: Range) => void;
	handleValidRangeAlert: () => void;
	updating: boolean;
	availability: string;
	validRange: boolean;
	onSubmit: (availability: string) => void;
}

const validationSchema = Yup.object({
	availability: Yup.string().oneOf([BLOCKED, AVAILABLE], ACTION_VALIDATE),
})

const AvailableDayForm = ({ blockedDays, adTitle, adRanking, validRange, updating, range, availability, onChangeRange, handleValidRangeAlert, onSubmit }: Props) => {
	const classes = useStyles();

	return (
		<Formik
			initialValues={{ availability }}
			validationSchema={validationSchema}
			onSubmit={(values) => {
				if (range && range.checkin && range.checkout) {
					onSubmit(values.availability)
				} else handleValidRangeAlert();
			}}
		>
			{({ values, errors, handleChange }) =>
				<Form>
					<div className={classes.container}>
						<div>
							<Calendar blockedDayList={blockedDays} onChangeRange={onChangeRange} />
							<Collapse in={!validRange}>
								<Alert severity="error">{REQUIRED_RANGE}</Alert>
							</Collapse>
						</div>
						<div className={classes.fields}>
							<TitlePanel title={adTitle} ranking={adRanking} />
							<div>
								<Typography variant='h5' color='textPrimary' >{AVAILABILITY}</Typography>
								<RadioGroup className={classes.radioGroup} aria-label={AVAILABILITY} name={'availability'} value={values.availability} onChange={handleChange}>
									<FormControlLabel value={BLOCKED} control={<Radio color={'primary'} />} label={BLOCKED} />
									<FormControlLabel value={AVAILABLE} control={<Radio color={'primary'} />} label={AVAILABLE} />
								</RadioGroup>
								{errors.availability ? (<ErrorFieldForm name='availability' />) : null}

							</div>
							<div className={classes.button}>
								<PrimaryButton
									loading={updating}
									disabled={values.availability === availability}
									type='submit' >{SUBMIT}</PrimaryButton>
							</div>
						</div>
					</div>
				</Form>
			}
		</Formik>
	)
}

export default AvailableDayForm;

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
		marginLeft: `${customTheme.spacing.margin.medium}`,
		flexDirection: 'column',
		justifyContent: 'center',
		[theme.breakpoints.down('md')]: {
			marginTop: theme.spacing(4),
			marginLeft: `${customTheme.spacing.margin.none}`,
		},
		[theme.breakpoints.down('sm')]: {
			padding: `0 ${customTheme.spacing.padding.medium}`
		}
	},
	radioGroup: {
		[theme.breakpoints.down('md')]: {
			display: 'flex',
			flexDirection: 'row'
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