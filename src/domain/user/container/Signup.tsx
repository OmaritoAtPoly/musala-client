import React from 'react'
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

export const Signup = () => {
    const handleSignup = (values: SignupInput) => {
        alert(JSON.stringify(values, null, 2));
    }

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
