import { Form, Formik } from 'formik';
import React from 'react';
import { SignupInitValue, SignupInput } from '../container/Signup';
import { TextField, Button } from '@material-ui/core';

interface Props {
    initialValues: SignupInitValue
    onSignup: (values: SignupInput) => void;
}

export const SignupForm = ({ initialValues, onSignup }: Props) => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values, { setSubmitting }) => {
                onSignup(values)
            }}
        >
            {({ isSubmitting, values, handleChange, handleSubmit }) => (
                <Form onSubmit={handleSubmit} >
                    <TextField
                        variant="outlined"
                        margin="dense"
                        id="fullName"
                        label="Full Name"
                        type="text"
                        name="fullName"
                        value={values.fullName}
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField
                        variant="outlined"
                        margin="dense"
                        id="email"
                        label="Email"
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField
                        variant="outlined"
                        margin="dense"
                        id="phone"
                        label="Phone number"
                        type="phone"
                        name="phone"
                        value={values.phone}
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField
                        variant="outlined"
                        margin="dense"
                        id="password"
                        label="Password"
                        type="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField
                        variant="outlined"
                        margin="dense"
                        id="confirmPassword"
                        label="Confirm Password"
                        type="password"
                        name="confirmPassword"
                        value={values.confirmPassword}
                        onChange={handleChange}
                        fullWidth
                    />
                    <Button disabled={isSubmitting} type={"submit"} >Submit</Button>
                </Form>
            )}
        </Formik>
    )
}