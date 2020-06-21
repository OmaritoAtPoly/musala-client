import React from 'react'
import ItemBooking from './BookingRow/BookingRow'
import { makeStyles } from '@material-ui/styles'

interface Booking {
    checkin: string
    checkout:string
    createdAt: string
    email: string
    fullName: string
    title: string
    description: string
    image: string
    host: string
    createdAtAds:string
}


const bookings:Booking[] = [
    {
        checkin: "20/02/2019",
        checkout: "20/02/2019",
        createdAt: "20/02/2019",
        email: "omara@gmail.com",
        fullName: "Omara Estrada",
        title: "The hose",
        description: "One of the best places in the world",
        image: "photo",
        host: "Pderito Calvo",
        createdAtAds: "20/02/2019",

    }, {
        checkin: "20/02/2019",
        checkout: "20/02/2019",
        createdAt: "20/02/2019",
        email: "omara@gmail.com",
        fullName: "Omara Estrada",
        title: "The hose",
        description: "One of the best places in the world",
        image: "photo",
        host: "Pderito Calvo",
        createdAtAds: "20/02/2019",
    }]



    
const Bookings = () => {
   const classes=useStyles();
    return (
        <div className={classes.container}>
            {bookings.map(value => {
                return <ItemBooking 
                        checkin={value.checkin} 
                        checkout={value.checkout}
                        createdAt={value.createdAt}
                        createAtAdd={value.createdAtAds}
                        title={value.title}
                        widthImage={25}
                        heightImage={25}
                        widthIcon={25}
                        heightIcon={25}
                        email={value.email}
                        emailHost={"mact200590@gmail.com"}
                        host={value.host}
                        fullName={value.fullName}
                        image={value.image}
                />
            })}
        </div>
    )
}
const useStyles = makeStyles({
    container: {
        backgroundColor:"white"
    }
  });
  



export default Bookings