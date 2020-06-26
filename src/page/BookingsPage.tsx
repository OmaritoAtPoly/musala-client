import React from 'react';
import Bookings from '../domain/booking/container/Bookings';
import ContainerPage from '../containers/ContainerPage';

const BookingsPage = () => {
  return (
    <ContainerPage>
      <Bookings />
    </ContainerPage>
  );
};

export default BookingsPage;
