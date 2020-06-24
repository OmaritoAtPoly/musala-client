import React from 'react';
import ContainerPage from '../containers/ContainerPage';
import Ad from '../domain/ad/container/Ads';
import { Calendar } from '../containers/calendar/Calendar';

const blockedDyas = [
  {
    "id": "ckbtr53kfrywd0999gbtpm6em",
    "checkin": "2020-06-25T00:00:00.000Z",
    "checkout": "2020-06-26T00:00:00.000Z",
    "byBooking": true
  },
  {
    "id": "ckbtr8ugsm84z0975ps85qdeg",
    "checkin": "2020-06-27T00:00:00.000Z",
    "checkout": "2020-06-28T00:00:00.000Z",
    "byBooking": true
  },
  {
    "id": "ckbtr9f98rz530999ybcdu32p",
    "checkin": "2020-07-16T00:00:00.000Z",
    "checkout": "2020-07-18T00:00:00.000Z",
    "byBooking": false
  },
  {
    "id": "ckbtr9z3im87f0975kea4zaa0",
    "checkin": "2020-07-12T00:00:00.000Z",
    "checkout": "2020-07-15T00:00:00.000Z",
    "byBooking": true
  },
  {
    "id": "ckbtruo3rs0pg0999dwrd39uf",
    "checkin": "2020-07-20T00:00:00.000Z",
    "checkout": "2020-07-22T00:00:00.000Z",
    "byBooking": true
  },
  {
    "id": "ckbtrv3gks0r30999d8o6znmy",
    "checkin": "2020-07-28T00:00:00.000Z",
    "checkout": "2020-07-30T00:00:00.000Z",
    "byBooking": true
  },
  {
    "id": "ckbtulwjfs77w0999et2cg6wd",
    "checkin": "2020-06-30T00:00:00.000Z",
    "checkout": "2020-07-01T00:00:00.000Z",
    "byBooking": true
  }
]


const HomePage = () => (

  <ContainerPage>
    <Calendar blockedDayList={blockedDyas} onChangeRange={() => { }} />
    {/* <Ad /> */}
  </ContainerPage>
);

export default HomePage;
