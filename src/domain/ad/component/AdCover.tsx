import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import customTheme from '../../../theme';
import { DescriptionPanel } from './DescriptionPanel';
import { PricePanel } from './PricePanel';

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
        <div>
            <div className={classes.root}>
                <div className={classes.containerTitle} >
                    <div className={classes.wrapTitle} >
                        <Typography className={classes.title} variant='h5' >{title}</Typography>
                    </div>
                </div>
            </div>
            <PricePanel price={price} />
            <DescriptionPanel description={description} />
        </div>
    )
}

const useStyles = makeStyles({
    root: ({ backgroundImage }: any) => ({
        display: 'flex',
        height: '80vh',
        // backgroundImage: `url(${backgroundImage})`,
        backgroundColor: customTheme.color.grayLight4,
        backgroundSize: 'cover',
        backgroundPosition: 'top'

    }),
    containerTitle: {
        display: 'flex',
        flexDirection: 'column',
        transform: 'translate(5%,10%)',
        marginTop: '5%',
        marginLeft: '5%'
    },
    wrapTitle: {
        backgroundColor: customTheme.color.grayLight1,
        animation: "$slideLeft 1s ease-out",
        padding: '1rem'
    },
    title: {
        fontSize: '2rem',
        fontWeight: 400,
        position: "relative",
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