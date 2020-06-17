import { Button, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Form, Formik } from 'formik';
import React from 'react';
import { SelectInput } from '../../../component/SelectInput';
import { SignupInitValue, SignupInput } from '../container/Signup';
import theme from '../../../theme';
import { PrimaryButton } from '../../../component/PrimaryButton';

interface Props {
    initialValues: SignupInitValue
    roles: any[];
    onSignup: (values: SignupInput) => void;
}

export const SignupForm = ({ initialValues, roles, onSignup }: Props) => {
    const classes = useStyles()
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
                onSignup(values)
            }}
        >
            {({ values, handleChange, handleSubmit }) => (
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
                        margin="dense"
                        value={values.role}
                        selectableOptions={roles}
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
                    <PrimaryButton type={'submit'} >Submit</PrimaryButton>
                    {/* <Button className={classes.submit} type={"submit"} variant={'contained'} size={'small'} fullWidth color={'primary'} ></Button> */}
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