import React, { useCallback, useMemo, useState, useEffect } from 'react'
import LoginForm from '../component/LoginForm'
import { useSignInMutation } from '../../../generate/types';
import { ApolloError } from 'apollo-boost';
import { set } from 'local-storage';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const { replace } = useHistory();
  const [loginFn, { loading }] = useSignInMutation();
  const [errorMessage, setAlertError] = useState<string | undefined>();

  const closeError = useCallback(() => {
    setAlertError(undefined);
  }, [setAlertError]);

  const onSubmit = useCallback(
    ({email, password}) => {
      loginFn({
        variables: {
          email,
          password
        },
        
      })
      .then((data)=>{
        set('userToken', data?.data?.signIn?.token);
        replace('/')
        //TODO redirect to main page
      })
      .catch((error: ApolloError)=>{
        setAlertError(error?.graphQLErrors.map(({ message }) => (message)).join(", "));
      });
    },
    [loginFn],
  );

  return <LoginForm 
            onSubmit={onSubmit} 
            loading={loading} 
            errorMessage={errorMessage}
            closeError={closeError}
         />;
}

export default Login
