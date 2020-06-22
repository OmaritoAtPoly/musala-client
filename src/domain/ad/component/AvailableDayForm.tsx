import { Collapse, Theme } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import { makeStyles } from '@material-ui/styles'
import { Form, Formik } from 'formik'
import { Moment } from 'moment'
import React from 'react'
import { PrimaryButton } from '../../../component/PrimaryButton'
import { Calendar } from '../../../containers/calendar/Calendar'
import { BOOK_NOW, REQUIRED_RANGE } from '../../../utils/constants'
import { Range } from '../../../utils/type'
import { TitlePanel } from '../../ad/component/detail/TitlePanel'


interface Props {
    blockedDays: Moment[];
    adTitle: string;
    adRanking: number;
    range: Range | undefined;
    onChangeRange: (range: Range) => void;
    handleValidRangeAlert: () => void;
    validRange: boolean;
    onSubmit: () => void;
}

const AvailableDayForm = ({ blockedDays, adTitle, adRanking, validRange, range, onChangeRange, handleValidRangeAlert, onSubmit }: Props) => {
    const classes = useStyles();

    return (
        <Formik
            initialValues={{ pax: 0 }}
            onSubmit={(values) => {
                if (range && range.checkIn && range.checkOut) {
                    // onSubmit(values.pax)
                } else handleValidRangeAlert();
            }}
        >
            {({ values, errors, touched, handleChange }) =>
                <Form>
                    <div className={classes.container}>
                        <div>
                            <Calendar blockedDays={blockedDays} onChangeRange={onChangeRange} />
                            <Collapse in={!validRange}>
                                <Alert severity="error">{REQUIRED_RANGE}</Alert>
                            </Collapse>
                        </div>
                        <div className={classes.fields}>
                            <TitlePanel title={adTitle} ranking={adRanking} />

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