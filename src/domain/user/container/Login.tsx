import { useApolloClient } from "@apollo/react-hooks";
import { ApolloError } from "apollo-boost";
import CryptoJS from "crypto-js";
import { set } from "local-storage";
import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { CurrentUserDocument, useSignInMutation } from "../../../generate/types";
import LoginForm from "../component/LoginForm";

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
      console.log("dd",process.env.B_CRYPT_SALT!)
      const hash = CryptoJS.AES.encrypt(
        password,
        process.env.REACT_APP_CRYPTO_JS_SECRET!
      ).toString();
      loginFn({
        variables: {
          email,
          password: hash,
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
          set("userToken", data?.data?.signIn?.token);
        })
        .then(() => {
          replace("/");
        })
        .catch((error: ApolloError) => {
          setAlertError(
            error?.graphQLErrors.map(({ message }) => message).join(", ")
          );
        });
    },
    [loginFn, replace]
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
