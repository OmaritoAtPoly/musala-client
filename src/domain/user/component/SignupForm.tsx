import { TextField, Typography, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import Alert from '../../../component/Alert';
import { ErrorFieldForm } from '../../../component/ErrorFieldForm';
import FakeNavLink from '../../../component/Header/FakeNavLink';
import { PrimaryButton } from '../../../component/PrimaryButton';
import customTheme from '../../../theme';
import { CLICK_ME, CONFIRM_PASSWORD_REQUIRED, SIGNUP, EMAIL_REQUIRED, INVALID_PHONE, MATCH_PASSWORD, NAME_REQUIRED, PASSWORD_REQUIRED, phoneRegExp, PHONE_REQUIRED, REGISTERED } from '../../../utils/constants';
import { SignupInitValue, SignupInput } from '../container/Signup';

interface Props {
    onSignup: (values: SignupInput) => void;
    closeError: () => void;
    errorMessage?: string;
    loading?: boolean;
    signIn: () => void;
}

const getInitValue = (): SignupInitValue => {
    return {
        fullName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    }
}

const validationSchema = Yup.object({
    fullName: Yup.string().required(NAME_REQUIRED),
    email: Yup.string().email().required(EMAIL_REQUIRED),
    phone: Yup.string().matches(phoneRegExp, INVALID_PHONE).required(PHONE_REQUIRED),
    password: Yup.string().required(PASSWORD_REQUIRED),
    confirmPassword: Yup.string().required(CONFIRM_PASSWORD_REQUIRED).oneOf([Yup.ref('password'), ''], MATCH_PASSWORD)
});

export const SignupForm = ({ onSignup, closeError, errorMessage, loading, signIn }: Props) => {
    const classes = useStyles()
    return (
        <Formik
            initialValues={getInitValue()}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                onSignup(values)
            }}
        >
            {({ values, errors, touched, handleChange, handleSubmit }) => (
                <Form className={classes.form} onSubmit={handleSubmit} >
                    <Typography variant={'h3'} color={'textPrimary'} > {SIGNUP} </Typography>
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
                    <Alert
                        message={errorMessage}
                        open={!!errorMessage}
                        onClose={closeError}
                    />
                    <div>{REGISTERED}<FakeNavLink className={classes.signIn} onClick={signIn}>{CLICK_ME}</FakeNavLink></div>
                </Form>
            )}
        </Formik>
    )
}

const useStyles = makeStyles((theme: Theme) => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: customTheme.dimension.width.big,
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: customTheme.dimension.width.w80,
            margin: `${customTheme.spacing.margin.small} auto`,
            borderRadius: '5px',
            border: 'unset'
        },
        [theme.breakpoints.up('sm')]: {
            width: customTheme.dimension.width.w40,
            margin: `${customTheme.spacing.margin.bigger} auto`,
            padding: customTheme.spacing.padding.big,
            border: `1px solid ${customTheme.color.grayLight4}`,
            borderRadius: customTheme.dimension.radius.small,
        },
    },
    submit: {
        margin: `${customTheme.spacing.margin.medium} auto`,
        padding: `${customTheme.spacing.margin.bigger} auto`
    },
    signIn: {
        color: customTheme.color.primary
    }
}));