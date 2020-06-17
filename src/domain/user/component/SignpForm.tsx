import { Form, Formik } from 'formik';
import React from 'react';
import { SignupInitValue, SignupInput } from '../container/Signup';
import { TextField, Button } from '@material-ui/core';
import { SelectInput } from '../../../component/SelectInput';

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
                        size={'small'}
                        fullWidth
                    />
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
                    <SelectInput
                        onChange={handleChange}
                        id="role"
                        name="role"
                        fullWidth
                        size={'small'}
                        value={values.role}
                        selectableOptions={[{ label: 'HOST', value: 'HOST' }, { label: 'CUSTOMER', value: 'CUSTOMER' }]}
                    />
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
                    <Button disabled={isSubmitting} type={"submit"} >Submit</Button>
                </Form>
            )}
        </Formik>
    )
}