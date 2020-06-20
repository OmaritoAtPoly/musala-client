import { ApolloError } from 'apollo-boost';
import { set } from 'local-storage';
import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSignInMutation } from '../../../generate/types';
import LoginForm from '../component/LoginForm';

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
        replace('/');
      })
      .catch((error: ApolloError)=>{
        setAlertError(error?.graphQLErrors.map(({ message }) => (message)).join(", "));
      });
    },
    [loginFn, replace],
  );

  return <LoginForm 
            onSubmit={onSubmit} 
            loading={loading} 
            errorMessage={errorMessage}
            closeError={closeError}
         />;
}

export default Login
