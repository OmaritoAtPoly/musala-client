import React, { useCallback, useState, useEffect } from "react";
import UserProfile from "../component/Profile";
import { useCurrentUserQuery, CurrentUserQuery } from "../../../generate/types";

const Profile = () => {
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const { data, loading, error } = useCurrentUserQuery({
    fetchPolicy: "cache-and-network",
    errorPolicy: "all",
  });

  const closeError = useCallback(() => {
    setErrorMessage(undefined);
  }, [setErrorMessage]);

  useEffect(() => {
    setErrorMessage(
      error?.graphQLErrors.map(({ message }) => message).join(", ")
    );
  }, [error]);

  const prepareData = (data: CurrentUserQuery | undefined) => {
    if (!data || !data?.currentUser) return initialProps;
    return {
      ...data.currentUser,
      bookingAmount: data.currentUser.bookings.length,
    };
  };

  return (
    <UserProfile
      closeError={closeError}
      errorMessage={errorMessage}
      loading={loading}
      {...prepareData(data)}
    />
  );
};

const initialProps = {
  fullName: "",
  email: "",
  role: "",
  bookingAmount: 0,
};

export default Profile;
