import React, { useCallback, useState } from 'react';
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

  const numberOfBooking = useCallback(
    (data) => {
      let bookings = 0;
      data.map((value: any) => {
        bookings++;
      });
      return bookings;
    },
    [data],
  );

  const prepareData = useCallback(
    (data: any) => {
      if (data?.currentUser?.role === Role.CLIENT) {
        return {
          name: data?.currentUser?.fullName,
          email: data?.currentUser?.email,
          role: data?.currentUser?.role,
          bookingAmount: numberOfBooking(data?.currentUser?.bookings),
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
