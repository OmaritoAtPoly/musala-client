import React from 'react'
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