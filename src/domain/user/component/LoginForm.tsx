import { TextField, Theme, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { makeStyles } from '@material-ui/styles';
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import Alert from '../../../component/Alert';
import { PrimaryButton } from '../../../component/PrimaryButton';
import { customTheme } from "../../../theme";
import { emailRegExp, EMAIL_INCORRECT, SIGNIN, EMAIL_REQUIRED, PASSWORD_REQUIRED } from '../../../utils/constants';

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
  closeError: () => void;
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
        <Form className={classes.form} onSubmit={handleSubmit}>
          <Typography variant={'h3'} color={'textPrimary'}>{SIGNIN}</Typography>
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

          <Alert
            message={errorMessage}
            open={!!errorMessage}
            onClose={closeError}
          />
        </Form>
      )}
    </Formik>

  );
};

const useStyles = makeStyles((theme: Theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      width: `${customTheme.dimension.width.w80}`,
      margin: `${customTheme.spacing.margin.small} auto`,
      borderRadius: `${customTheme.dimension.radius.small}`,
      border: 'unset'
    },
    [theme.breakpoints.up('sm')]: {
      width: `${customTheme.dimension.width.w40}`,
      margin: `${customTheme.spacing.margin.bigger} auto`,
      border: `1px solid ${customTheme.color.grayLight4}`,
      borderRadius: `${customTheme.dimension.radius.small}`,
      padding: `${customTheme.spacing.padding.big}`,
    },



  },
  fields: {
    margin: `${customTheme.spacing.margin.big} ${customTheme.spacing.margin.medium} ${customTheme.spacing.margin.smaller}  `,
  },
  error: {
    color: "red",
    fontSize: "15px"
  }
}))

export default LoginForm;