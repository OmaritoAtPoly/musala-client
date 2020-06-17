import React from 'react'
import { SignupForm } from '../component/SignpForm'

enum UserRole {
    'HOST',
    'CUSTOMER'
}

export type SignupInput = {
    fullName: string;
    email: string;
    phone: string;
    password: string;
    role: UserRole;
}

export type SignupInitValue = {
    fullName: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
    role: UserRole;
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