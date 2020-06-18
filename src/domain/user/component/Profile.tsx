import React from 'react'
import { makeStyles } from '@material-ui/styles';
import customTheme from '../../../theme';
import { Typography } from '@material-ui/core';

interface Props {
    name: string;
    role: string;
    email: string;
    bookingAmount: number;
}

const UserProfile = ({ name, role, email, bookingAmount }: Props) => {
    const classes = useStyles()
    return (
        <div className={classes.container} >
            <div className={classes.avatar} />
            <Typography variant={'h4'} color={'textPrimary'} > {name}</Typography>
            <Typography variant={'body1'} color={'textPrimary'} > {role} </Typography>
            <Typography variant={'h5'} color={'textPrimary'} > {email} </Typography>
            <Typography variant={'body1'} color={'textPrimary'} > {`${bookingAmount} completed bookings `} </Typography>
        </div>
    )
}

export default UserProfile

const useStyles = makeStyles({
    container: {
        marginTop: customTheme.spacing.margin.m10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        width: '4rem',
        height: '4rem',
        margin: customTheme.spacing.margin.smaller,
        borderRadius: '50%',
        backgroundColor: customTheme.color.grayLight2
    }
});