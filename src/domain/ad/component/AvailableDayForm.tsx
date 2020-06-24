import { Collapse, FormControlLabel, Radio, RadioGroup, Theme, Typography, CircularProgress } from '@material-ui/core'
import CalendarAlert from '@material-ui/lab/Alert';
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
import Alert from '../../../component/Alert';

interface Props {
	blockedDays: BlockedDay[];
	adTitle: string;
	adRanking: number;
	range: Range | undefined;
	errorMessage?: string;
	closeError: () => void;
	onChangeRange: (range: Range) => void;
	handleValidRangeAlert: () => void;
	loadingCurrentAd: boolean;
	updating: boolean;
	availability: string;
	validRange: boolean;
	onSubmit: (availability: string) => void;
}

const validationSchema = Yup.object({
	availability: Yup.string().oneOf([BLOCKED, AVAILABLE], ACTION_VALIDATE),
})

const AvailableDayForm = ({ blockedDays, adTitle, adRanking, validRange, updating, range, availability, errorMessage, loadingCurrentAd, closeError, onChangeRange, handleValidRangeAlert, onSubmit }: Props) => {
	const classes = useStyles();
	console.log(errorMessage)
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
						{loadingCurrentAd && <CircularProgress size={50} className={classes.loading} />}
						<div className={classes.calendar}>
							<Calendar blockedDayList={blockedDays} onChangeRange={onChangeRange} />
							<Collapse in={!validRange}>
								<CalendarAlert severity="error">{REQUIRED_RANGE}</CalendarAlert>
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
						<Alert
							message={errorMessage}
							open={!!errorMessage}
							onClose={closeError}
						/>
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
		width: '100%',
		marginTop: customTheme.spacing.margin.small,
		padding: theme.spacing(1),
	},
	calendar: {
		marginBottom: customTheme.spacing.margin.big,
	},
	fields: {
		margin: `0 ${customTheme.spacing.margin.small}`,
		flexDirection: 'column',
		justifyContent: 'center',
		[theme.breakpoints.down('md')]: {
			marginTop: theme.spacing(2)
		}
	},
	radioGroup: {
		display: 'flex',
		flexDirection: 'row'
	},
	price: {
		marginTop: theme.spacing(1),
	},
	button: {
		marginTop: theme.spacing(2),
		display: 'inline-block'
	},
	loading: {
		position: 'absolute',
		top: customTheme.spacing.margin.m50,
		left: customTheme.spacing.margin.m50
	}
})
);
