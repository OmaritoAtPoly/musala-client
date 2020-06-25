import { ApolloError } from 'apollo-boost';
import { set } from 'local-storage';
import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import LoginForm from '../component/LoginForm';
import { CurrentUserDocument, useSignInMutation } from '../../../generate/types';
import { useApolloClient } from '@apollo/react-hooks';

const Login = () => {
  const client = useApolloClient();
  const { replace } = useHistory();
  const [loginFn, { loading }] = useSignInMutation();
  const [errorMessage, setAlertError] = useState<string | undefined>();

  const closeError = useCallback(() => {
    setAlertError(undefined);
  }, [setAlertError]);

  const onSubmit = useCallback(
    ({ email, password }) => {
      loginFn({
        variables: {
          email,
          password,
        },
        update(cache, { data }) {
          cache.writeQuery({
            query: CurrentUserDocument,
            data: { currentUser: data?.signIn },
          });
        },
      })
        .then((data) => {
          client.resetStore();
          set('userToken', data?.data?.signIn?.token);
        })
        .then(() => {
          replace('/');
        })
        .catch((error: ApolloError) => {
          setAlertError(error?.graphQLErrors.map(({ message }) => message).join(', '))
          setTimeout(() => { closeError() }, 3000)
        });
    },
    [loginFn, replace],
  );

  return (
    <LoginForm
      onSubmit={onSubmit}
      loading={loading}
      errorMessage={errorMessage}
      closeError={closeError}
    />
  );
};

export default Login;
