import React from 'react'
import Bookings from '../domain/booking/component/Bookings'
import ContainerPage from '../containers/ContainerPage'
import { Availability } from '../domain/ad/container/Availability'


const BookingsPage = () => {
    return (
        <ContainerPage>
            <Availability />
        </ContainerPage>
    )
}


export default BookingsPage