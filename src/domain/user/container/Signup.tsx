import { ApolloError } from 'apollo-boost'
import { set } from 'local-storage'
import React, { useCallback, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useSignUpMutation } from '../../../generate/types'
import { SignupForm } from '../component/SignupForm'

export type SignupInput = {
    fullName: string;
    email: string;
    phone: string;
    password: string;
}

export type SignupInitValue = {
    fullName: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
}

const Signup = () => {

    const { push } = useHistory();
    const [signUpFn, { loading, data }] = useSignUpMutation();
    const [errorMessage, setAlertError] = useState<string | undefined>();

    const closeError = useCallback(() => {
        setAlertError(undefined);
    }, [setAlertError])

    const handleSignup = useCallback(
        ({ email, fullName, password, phone }) => {
            signUpFn({
                variables: {
                    email,
                    password,
                    fullName,
                    phone
                }
            })
                .then((data) => {
                    set("userToken", data?.data?.signUp?.token);
                    push("/");
                }).catch((error: ApolloError) => {
                    setAlertError(error?.graphQLErrors.map(({ message }) => (message)).join(", "));
                })
        }, [signUpFn])

    return <SignupForm loading={loading} initialValues={getInitValue()} onSignup={handleSignup} closeError={closeError} errorMessage={errorMessage} />
}

const getInitValue = (): SignupInitValue => {
    return {
        fullName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    }
}
export default Signup
