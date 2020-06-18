import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import customTheme from '../../../../theme';
import { DescriptionPanel } from './DescriptionPanel';
import { PricePanel } from './PricePanel';
import { rgba } from 'polished';

interface Props {
    title: string;
    description: string;
    image: string;
    price: number;
}

export const AdDetail = ({ title, description, image, price }: Props) => {
    const style = { backgroundImage: image }
    const classes = useStyles(style);

    return (
        <div>
            <div className={classes.root}>
                <div className={classes.containerTitle} >
                    <div className={classes.wrapTitle} >
                        <Typography className={classes.title} color='textPrimary' >{title}</Typography>
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
        backgroundColor: customTheme.color.grayLight4,
        backgroundSize: 'cover',
        backgroundPosition: 'top'

    }),
    containerTitle: {
        display: 'flex',
        flexDirection: 'column',
        transform: 'translate(5%,10%)',
        marginTop: customTheme.spacing.margin.m5,
        marginLeft: customTheme.spacing.margin.m5
    },
    wrapTitle: {
        backgroundColor: rgba(customTheme.color.grayLight1, .1),
        animation: "$slideLeft 1s ease-out",
        padding: customTheme.spacing.padding.small
    },
    title: {
        fontSize: '1.5rem',
        fontWeight: 400,
        backfaceVisibility: 'hidden',
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
    }

});