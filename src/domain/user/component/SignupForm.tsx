import { TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import Alert from '../../../component/Alert';
import { ErrorFieldForm } from '../../../component/ErrorFieldForm';
import { PrimaryButton } from '../../../component/PrimaryButton';
import customTheme from '../../../theme';
import { CONFIRM_PASSWORD_REQUIRED, EMAIL_REQUIRED, INVALID_PHONE, MATCH_PASSWORD, NAME_REQUIRED, PASSWORD_REQUIRED, phoneRegExp, PHONE_REQUIRED } from '../../../utils/constants';
import { SignupInitValue, SignupInput } from '../container/Signup';

interface Props {
    initialValues: SignupInitValue
    onSignup: (values: SignupInput) => void;
    closeError: () => void;
    errorMessage?: string;
    loading?: boolean;
}                


const validationSchema = Yup.object({
    fullName: Yup.string().required(NAME_REQUIRED),
    email: Yup.string().email().required(EMAIL_REQUIRED),
    phone: Yup.string().matches(phoneRegExp, INVALID_PHONE).required(PHONE_REQUIRED),
    password: Yup.string().required(PASSWORD_REQUIRED),
    confirmPassword: Yup.string().required(CONFIRM_PASSWORD_REQUIRED).oneOf([Yup.ref('password'), ''], MATCH_PASSWORD)
});

export const SignupForm = ({ initialValues, onSignup, closeError, errorMessage, loading }: Props) => {
    const classes = useStyles()
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                onSignup(values)
            }}
        >
            {({ values, errors, touched, handleChange, handleSubmit }) => (
                <>
                    <Form className={classes.form} onSubmit={handleSubmit} >
                        <Typography variant={'h3'} color={'textPrimary'} > Signup </Typography>
                        <TextField
                            variant="outlined"
                            margin="dense"
                            id="fullName"
                            label="Full Name"
                            type="text"
                            name="fullName"
                            value={values.fullName}
                            onChange={handleChange}
                            size={'small'}
                            fullWidth
                        />
                        {errors.fullName && touched.fullName ? (<ErrorFieldForm name={'fullName'} />) : null}
                        <TextField
                            variant="outlined"
                            margin="dense"
                            id="email"
                            label="Email"
                            type="email"
                            name="email"
                            size={'small'}
                            value={values.email}
                            onChange={handleChange}
                            fullWidth
                        />
                        {errors.email && touched.email ? (<ErrorFieldForm name={'email'} />) : null}
                        <TextField
                            variant="outlined"
                            margin="dense"
                            id="phone"
                            label="Phone number"
                            type="phone"
                            name="phone"
                            size={'small'}
                            value={values.phone}
                            onChange={handleChange}
                            fullWidth
                        />
                        {errors.phone && touched.phone ? (<ErrorFieldForm name={'phone'} />) : null}
                        <TextField
                            variant="outlined"
                            margin="dense"
                            id="password"
                            label="Password"
                            type="password"
                            name="password"
                            size={'small'}
                            value={values.password}
                            onChange={handleChange}
                            fullWidth
                        />
                        {errors.password && touched.password ? (<ErrorFieldForm name={'password'} />) : null}
                        <TextField
                            variant="outlined"
                            margin="dense"
                            id="confirmPassword"
                            label="Confirm Password"
                            type="password"
                            name="confirmPassword"
                            size={'small'}
                            value={values.confirmPassword}
                            onChange={handleChange}
                            fullWidth
                        />
                        {errors.confirmPassword && touched.confirmPassword ? (<ErrorFieldForm name={'confirmPassword'} />) : null}
                        <PrimaryButton loading={loading} type={'submit'} >Submit</PrimaryButton>
                    </Form>
                    <Alert
                        message={errorMessage}
                        open={!!errorMessage}
                        onClose={closeError}
                    />
                </>
            )}
        </Formik>
    )
}

const useStyles = makeStyles(theme => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: `${customTheme.spacing.margin.big} auto`,
        padding: `${customTheme.spacing.padding.big}`,
        border: `1px solid ${customTheme.color.grayLight4}`,
        borderRadius: '5px',
        '@media (min-width: 700px)': {
            width: '40%',
            margin: `${customTheme.spacing.margin.bigger} auto`,
        },
        '@media (min-width: 800px)': {
            width: '35%'
        }
    },
    submit: {
        margin: `${customTheme.spacing.margin.medium} auto`,
        padding: `${customTheme.spacing.margin.bigger} auto`
    }
}));