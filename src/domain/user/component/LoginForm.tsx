import { TextField, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { makeStyles } from '@material-ui/styles';
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import Alert from '../../../component/Alert';
import { PrimaryButton } from '../../../component/PrimaryButton';
import theme from "../../../theme";
import { emailRegExp, EMAIL_INCORRECT, EMAIL_REQUIRED, PASSWORD_REQUIRED } from '../../../utils/constants';

const validationSchema = Yup.object({
  email: Yup.string().matches(emailRegExp, EMAIL_INCORRECT).required(EMAIL_REQUIRED),
  password: Yup.string().required(PASSWORD_REQUIRED)
})

interface FormLoginValues {
  email: string;
  password: string;
}

interface Props {
  loading: boolean;
  errorMessage?: string;
  closeError: ()=> void;
  initialValues?: FormLoginValues;
  onSubmit: ((values: {
    email: string;
    password: string;
}, formikHelpers: FormikHelpers<{
    email: string;
    password: string;
}>) => void | Promise<any>)
}

const LoginForm = ({ initialValues = {
  email: '',
  password: ''
}, onSubmit, loading, errorMessage, closeError }: Props) => {
  const classes = useStyles();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
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
            <PrimaryButton loading={loading} type={'submit'} >Submit</PrimaryButton>
          </Form>
          <Alert
            message={errorMessage}
            open={!!errorMessage}
            onClose={closeError}
      />
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

export default LoginForm;