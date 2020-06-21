import React from 'react';
import UserProfile from '../component/Profile';
import { CurrentUserDocument, CurrentUserQuery, CurrentUserQueryVariables } from '../../../generate/types'
import { useQuery } from '@apollo/react-hooks';
import { ErrorFieldForm } from '../../../component/ErrorFieldForm'

const Profile = () => {
    const { data, loading, error } = useQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument);///
    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <ErrorFieldForm name={"Something was wrong"} />
    }
    const prepareData = (data: any) => {
        return {
            name: data.currentUser.fullName,
            email: data.currentUser.email,
            role: data.currentUser.role,
            bookingAmount: 30
        }
    }
    return <UserProfile {...prepareData(data)} />

}
export default Profile

