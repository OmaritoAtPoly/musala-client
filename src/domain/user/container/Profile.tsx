import React, { useCallback, useState } from 'react';
import UserProfile from '../component/Profile';
import { useCurrentUserQuery } from '../../../generate/types'

const Profile = () => {
    const [errorMessage, setErrorMessage] = useState<string | undefined>();
    const { data, loading, error } = useCurrentUserQuery(
        {
            fetchPolicy: 'cache-first',
            errorPolicy: 'all',
        });

    const closeError = useCallback(() => {
        setErrorMessage(undefined);
    }, [setErrorMessage])


    const prepareData =useCallback( (data:any) => {
      if(data?.currentUser?.role==="CLIENT") {
        return {
          name: data?.currentUser?.fullName,
            email: data?.currentUser?.email,
            role: data?.currentUser?.role,
            bookingAmount: data?.currentUser?.bookingAmount
        }
        }else{
          return{
            name: data?.currentUser?.fullName,
            email: data?.currentUser?.email,
            role: data?.currentUser?.role,
          }
        }
      
      },[data])

    return <UserProfile closeError={closeError} errorMessage={errorMessage} loading={loading} {...prepareData(data)} />
}
export default Profile

