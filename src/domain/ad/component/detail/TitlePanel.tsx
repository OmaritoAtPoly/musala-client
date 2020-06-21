import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import customTheme from '../../../../theme';
import { rgba } from 'polished';

interface Props {
    title: string;
    image: string;
}

export const TitlePanel = ({ title, image }: Props) => {
    const style = { backgroundImage: image }
    const classes = useStyles(style);
    return (
        <div className={classes.root}>
            <div className={classes.containerTitle} >
                <div className={classes.wrapTitle} >
                    <Typography className={classes.title} color='textPrimary' >{title}</Typography>
                </div>
            </div>
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