import { ApolloError } from 'apollo-boost';
import { set } from 'local-storage';
import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { CurrentUserDocument, useSignUpMutation } from '../../../generate/types';
import { SignupForm } from '../component/SignupForm';
import { useApolloClient } from '@apollo/react-hooks';

export type SignupInput = {
  fullName: string;
  email: string;
  phone: string;
  password: string;
};

export type SignupInitValue = {
  fullName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
};

const Signup = () => {
  const client = useApolloClient();
  const { push } = useHistory();
  const [signUpFn, { loading }] = useSignUpMutation();
  const [errorMessage, setAlertError] = useState<string | undefined>();

  const closeError = useCallback(() => {
    setAlertError(undefined);
  }, [setAlertError]);

  const handleSignup = useCallback(
    ({ email, fullName, password, phone }) => {
      signUpFn({
        variables: {
          email,
          password,
          fullName,
          phone,
        },
        update(cache, { data }) {
          cache.writeQuery({
            query: CurrentUserDocument,
            data: { currentUser: data?.signUp },
          });
        },
      })
        .then((data) => {
          client.resetStore();
          set('userToken', data?.data?.signUp?.token);
        })
        .then(() => {
          push('/');
        })
        .catch((error: ApolloError) => {
          setAlertError(
            error?.graphQLErrors.map(({ message }) => message).join(', '),
          );
        });
    },
    [signUpFn],
  );

  return (
    <SignupForm
      loading={loading}
      onSignup={handleSignup}
      closeError={closeError}
      errorMessage={errorMessage}
    />
  );
};

export default Signup;
