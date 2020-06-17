import { TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { ErrorMessage, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { PrimaryButton } from '../../../component/PrimaryButton';
import { phoneRegExp } from '../../../constants';
import theme from '../../../theme';
import { SignupInitValue, SignupInput } from '../container/Signup';


interface Props {
    initialValues: SignupInitValue
    onSignup: (values: SignupInput) => void;
}


const validationSchema = Yup.object({
    fullName: Yup.string().required('Name is required'),
    email: Yup.string().email().required('Email is required'),
    phone: Yup.string().matches(phoneRegExp, "Phone number is not valid")
        .required('Phone is required'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string()
        .required('Confirm password is required')
        .oneOf([Yup.ref('password'), ''], 'Passwords must match')
});

export const SignupForm = ({ initialValues, onSignup }: Props) => {
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
                    {errors.fullName && touched.fullName ? (<ErrorMessage name="fullName" component="div" />) : null}
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
                    {errors.email && touched.email ? (<ErrorMessage name="email" component="div" />) : null}
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
                    {errors.phone && touched.phone ? (<ErrorMessage name="phone" component="div" />) : null}
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
                    {errors.password && touched.password ? (<ErrorMessage name="password" component="div" />) : null}
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
                    {errors.confirmPassword && touched.confirmPassword ? (<ErrorMessage name="confirmPassword" component="div" />) : null}
                    <PrimaryButton type={'submit'} >Submit</PrimaryButton>
                </Form>
            )}
        </Formik>
    )
}


const useStyles = makeStyles({
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '20%',
        margin: '5% auto',
        padding: '2rem',
        border: `1px solid ${theme.color.grayLight4}`,
        borderRadius: '5px'
    },
    submit: {
        margin: '1rem auto',
        padding: '4rem auto'
    }
});