import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

interface Props {
    title: string;
    description: string;
    image: string;
    price: number;
}

export const AdCover = ({ title, description, image, price }: Props) => {
    const style = { backgroundImage: image }
    const classes = useStyles(style);

    return (
        <div className={classes.root}>
            <div className={classes.containerTitle} >
                <Typography className={classes.title} >{title}</Typography>
                <Typography className={classes.subtitle} variant='h4' >{description}</Typography>
            </div>
        </div>
    )
}

const useStyles = makeStyles({
    root: ({ backgroundImage }: any) => ({
        display: 'flex',
        height: '50vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top'

    }),
    containerTitle: {
        display: 'flex',
        flexDirection: 'column',
        color: '#fff',
        transform: 'translate(5%,10%)',
        marginTop: '5%',
        marginLeft: '5%'
    },
    title: {
        fontSize: '4rem',
        fontWeight: 400,
        position: "relative",
        animation: "$slideLeft 1s ease-out"
    },
    subtitle: {
        fontSize: '1.5rem',
        fontWeight: 300,
        position: "relative",
        animation: "$slideRight 1s ease-out"
    },

    "@keyframes slideLeft": {
        "0%": {
            opacity: 0,
            transform: "translate(-100px)",
        },
        "80%": {
            transform: "translate(10px)"
        },
        "100%": {
            opacity: 1,
            transform: "translate(0)"
        }
    },

    "@keyframes slideRight": {
        "0%": {
            opacity: 0,
            transform: "translate(100px)",
        },
        "80%": {
            transform: "translate(-10px)"
        },
        "100%": {
            opacity: 1,
            transform: "translate(0)"
        }
    }
});