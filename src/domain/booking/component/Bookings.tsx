import React, { useState, useCallback } from 'react';
import ItemBooking from './BookingRow/BookingRow';
import { makeStyles } from '@material-ui/styles';
import moment from 'moment' 
import {
  useCurrentUserBookingsQuery,
} from '../../../generate/types';



const Bookings = () => {
  const classes = useStyles();
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const closeError = useCallback(() => {
    setErrorMessage(undefined);
  }, [setErrorMessage]);

  const { data, loading, error } = useCurrentUserBookingsQuery({
    fetchPolicy: 'cache-first',
    errorPolicy: 'all',
  });

  return (
    <div className={classes.container}>
      {data?.currentUser?.bookings?.map((value) => {
        return (
          <ItemBooking
            checkin={moment(value.checkin).format("DD-MM-YYYY")}
            checkout={moment(value.checkout).format("DD-MM-YYYY")}
            createdAt={moment(value.createdAt).format("DD-MM-YYYY")}
            email={value.client.email}
            fullName={value.client.fullName}
            title={value.ad.title}
            image={value.ad.image}
            host={value.ad.host.fullName}
            createAtAdd={moment(value.ad.createdAt).format("DD-MM-YYYY")}
            emailHost={value.ad.host.email}
            widthImage={60}
            heightImage={60}
            widthIcon={25}
            heightIcon={25}
            loading={loading}
            errorMessage={errorMessage}
            closeError={closeError}
          />
        );
      })}
    </div>
  );
};
const useStyles = makeStyles({
  container: {
    backgroundColor: 'white',
  },
});

export default Bookings;
