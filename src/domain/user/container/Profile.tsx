import React, { useCallback, useState, useMemo } from 'react';
import UserProfile from '../component/Profile';
import { useCurrentUserQuery } from '../../../generate/types';
import { Role } from '../../../utils/type';

const Profile = () => {
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const { data, loading, error } = useCurrentUserQuery({
    fetchPolicy: 'cache-first',
    errorPolicy: 'all',
  });

  const closeError = useCallback(() => {
    setErrorMessage(undefined);
  }, [setErrorMessage]);

  const numberOfBooking = useMemo(
    () => data?.currentUser?.bookings.length || 0,
    [data],
  );

  const prepareData = useCallback(
    (data: any) => {
      if (data?.currentUser?.role === Role.CLIENT) {
        return {
          name: data?.currentUser?.fullName,
          email: data?.currentUser?.email,
          role: data?.currentUser?.role,
          bookingAmount: numberOfBooking,
        };
      } else {
        return {
          name: data?.currentUser?.fullName,
          email: data?.currentUser?.email,
          role: data?.currentUser?.role,
        };
      }
    },
    [data],
  );

  return (
    <UserProfile
      closeError={closeError}
      errorMessage={errorMessage}
      loading={loading}
      {...prepareData(data)}
    />
  );
};
export default Profile;
