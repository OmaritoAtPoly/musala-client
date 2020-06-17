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
        alert(JSON.stringify(values, null, 2));
    }

    return <SignupForm initialValues={getInitValue()} onSignup={handleSignup} roles={getRoles()} />
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

const getRoles = () => {
    return [
        {
            label: 'Host',
            value: 'HOST'
        },
        {
            label: 'Customer',
            value: 'CUSTOMER'
        }
    ]
}