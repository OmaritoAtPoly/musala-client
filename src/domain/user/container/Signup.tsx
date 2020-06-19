import React, { useCallback } from 'react'
import { SignupForm } from '../component/SignupForm'
import { useSignUpMutation } from '../../../generate/types'

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

    const [signUpFn, { loading, data }] = useSignUpMutation();

    const handleSignup = useCallback(
        ({email, fullName, password, phone}) => {
        signUpFn({
            variables:{
                email,
                password,
                fullName,
                phone
            }
        })
    }, [signUpFn])

    if(loading) return <div>Loading...</div>
    if (data) console.log(data);
    // const handleSignup = (values: SignupInput) => {
    //     alert(JSON.stringify(values, null, 2));
    // }

    return <SignupForm initialValues={getInitValue()} onSignup={handleSignup} />
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
