import { Collapse, FormControlLabel, Radio, RadioGroup, Theme, Typography } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import { makeStyles } from '@material-ui/styles'
import { Form, Formik } from 'formik'
import { Moment } from 'moment'
import React from 'react'
import { PrimaryButton } from '../../../component/PrimaryButton'
import { Calendar } from '../../../containers/calendar/Calendar'
import { AVAILABILITY, AVAILABLE, BLOCKED, REQUIRED_RANGE, SUBMIT, FULL_EDITABLE_MODE } from '../../../utils/constants'
import { TitlePanel } from '../../ad/component/detail/TitlePanel'
import { Range } from '../../../utils/type'

interface Props {
	blockedDays: Moment[];
	adTitle: string;
	adRanking: number;
	range: Range | undefined;
	onChangeRange: (range: Range) => void;
	handleValidRangeAlert: () => void;
	availability: string;
	validRange: boolean;
	onSubmit: (availability: string) => void;
}

const AvailableDayForm = ({ blockedDays, adTitle, adRanking, validRange, range, availability, onChangeRange, handleValidRangeAlert, onSubmit }: Props) => {
	const classes = useStyles();

	return (
		<Formik
			initialValues={{ availability }}
			onSubmit={(values) => {
				if (range && range.checkin && range.checkout) {
					onSubmit(values.availability)
				} else handleValidRangeAlert();
			}}
		>
			{({ values, handleChange }) =>
				<Form>
					<div className={classes.container}>
						<div>
							<Calendar blockedDays={blockedDays} mode={FULL_EDITABLE_MODE} onChangeRange={onChangeRange} />
							<Collapse in={!validRange}>
								<Alert severity="error">{REQUIRED_RANGE}</Alert>
							</Collapse>
						</div>
						<div className={classes.fields}>
							<TitlePanel title={adTitle} ranking={adRanking} />
							<div>
								<Typography variant='h5'>{AVAILABILITY}</Typography>
								<RadioGroup aria-label={AVAILABILITY} name={'availability'} value={values.availability} onChange={handleChange}>
									<FormControlLabel value={BLOCKED} control={<Radio color={'primary'} />} label={BLOCKED} />
									<FormControlLabel value={AVAILABLE} control={<Radio color={'primary'} />} label={AVAILABLE} />
								</RadioGroup>
							</div>
							<div className={classes.button}>
								<PrimaryButton
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