import { TextField, Theme, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { Form, Formik } from 'formik'
import React from 'react'
import { PrimaryButton } from '../../../component/PrimaryButton'
import { PER_NIGHT } from '../../../utils/constants'
import { TitlePanel } from '../../ad/component/detail/TitlePanel'
import { Range } from '../utils'

interface InitValues {
	range: Range,
	pax: number
}

interface Props {
	bookedDays: Range[];
	adTitle: string;
	adRanking: number;
	price: number;
	onChangeRange: (range: Range) => void;
	range: Range | undefined;
	initialValues: InitValues;
}

export const BookingForm = ({ bookedDays, adTitle, adRanking, price, initialValues, range, onChangeRange }: Props) => {
	const classes = useStyles();

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={(values, actions) => { console.log(values) }}
		>
			{({ values, handleChange }) =>
				<Form>
					<div className={classes.container}>
						{/* <Calendar
							onChangeRange={onChangeRange}
							bookedDays={bookedDays}
						/> */}
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
							<Typography color='textPrimary' variant='h5' >{`$${price} ${PER_NIGHT}`}</Typography>
							<PrimaryButton type='submit' >{'Book'}</PrimaryButton>
						</div>
					</div>
				</Form>
			}
		</Formik>
	)
}

const useStyles = makeStyles((theme: Theme) => ({
	container: {
		display: 'flex',
		flexFlow: 'row wrap',
		justifyContent: 'center',
		marginTop: '1rem',
		padding: theme.spacing(1),
	},
	fields: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
	}
}));