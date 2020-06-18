import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { Typography, Button } from '@material-ui/core';
import customTheme from '../../../theme';

interface Props {
    price: number;
}

export const PricePanel = ({ price }: Props) => {
    const classes = useStyles()
    return (
        <div className={classes.panel} >
            <Typography className={classes.price} >{price + ' per night /  '}</Typography>
            <Button size='small' variant="text" color='primary' >Book Now!</Button>
        </div>
    )
}

const useStyles = makeStyles({
    price: {
        fontWeight: 'bold',
        marginRight: customTheme.spacing.margin.small
    },
    panel: {
        display: 'flex',
        marginTop: '1rem',
        alignItems: 'center'
    }
});