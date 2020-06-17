import React from 'react'
import { SignupForm } from '../component/SignpForm'

enum UserRole {
    HOST = 'HOST',
    CUSTOMER = 'CUSTOMER'
}

export type SignupInput = {
    fullName: string;
    email: string;
    phone: string;
    password: string;
    role: string;
}

export type SignupInitValue = {
    fullName: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
    role: string;
}

export const Signup = () => {
    const handleSignup = (values: SignupInput) => {
        console.log(values)
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
        role: UserRole.CUSTOMER
    }
}