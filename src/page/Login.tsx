import React, { useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { emailRegExp } from '../utils/constants'
import { makeStyles } from '@material-ui/styles';
import { Typography, TextField, Button } from '@material-ui/core';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import theme from "../theme"
import { PrimaryButton } from '../component/PrimaryButton';

const initialValues = {
  email: '',
  password: ''
};
const validationSchema = Yup.object({
  email: Yup.string().matches(emailRegExp, 'Incorrect email').required('Email is required'),
  password: Yup.string().required('Password is required')
})

const Login = () => {
  const classes = useStyles();
  const handleSubmit = (email: string, password: string) => {
    console.log(`this is the value`, email, password)
  }
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        handleSubmit(values.email, values.password);
        alert(JSON.stringify(values, null, 2));
        actions.resetForm();
      }}
    >
      {({ values, errors, touched, handleChange, handleSubmit }) => (
        <div className={classes.container}>
          <Form className={classes.form} onSubmit={handleSubmit}>
            <Typography className={classes.title} variant={'h1'} color={'textPrimary'}> Login </Typography>
            <Field name="email">
              {({ field }: any) => (
                <TextField
                  name="email"
                  id="email"
                  label="Email"
                  variant="outlined"
                  value={values.email}
                  placeholder="Email"
                  type="email"
                  onChange={handleChange}
                  size={'small'}
                  fullWidth
                  InputProps={{ endAdornment: (<MailOutlineIcon />) }}
                  {...field}
                />
              )}
            </Field>
            {errors.email && touched.email ? (<ErrorMessage className={classes.error} name="email" component="div" />) : null}
            <Field name="password">
              {({ field }: any) => (
                <TextField
                  className={classes.fields}
                  id="password"
                  label="Password"
                  value={values.password}
                  variant="outlined"
                  placeholder="Password"
                  type="password"
                  size={'small'}
                  fullWidth
                  InputProps={{ endAdornment: (<LockOutlinedIcon />) }}
                  onChange={handleChange}
                  {...field}
                />
              )}
            </Field>
            {errors.password && touched.password ? (<ErrorMessage className={classes.error} name="password" component="div" />) : null}
            <PrimaryButton type={'submit'} >Submit</PrimaryButton>
          </Form>
        </div>
      )}
    </Formik>

  );
};

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: "100vh"
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minwidth: '25%',
    padding: `${theme.spacing.margin.medium}`,
    border: `1px solid ${theme.color.grayLight4}`,
    borderRadius: `${theme.spacing.margin.smaller}`,
    marginBottom: `${theme.spacing.margin.smaller}`,
  },
  fields: {
    margin: `${theme.spacing.margin.big} ${theme.spacing.margin.medium} ${theme.spacing.margin.smaller}  `,
  },
  title: {
    marginBottom: `${theme.spacing.margin.small}`,
    textAlign: "center"
  },
  error: {
    color: "red",
    fontSize: "15px"

  },
  submit: {
    width: '100%',
    color: theme.color.white,
    backgroundColor: theme.color.primary,
    '&:hover': {
      backgroundColor: theme.color.primary,
    }
  }
});

export default Login