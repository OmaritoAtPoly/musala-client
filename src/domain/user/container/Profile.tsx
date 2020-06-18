import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { customTheme } from '../../../theme'
import { Typography } from '@material-ui/core';

const Profile = () => {
    const classes = useStyles()
    return (
        <div className={classes.container} >
            <div className={classes.avatar} />
            <Typography variant={'h4'} color={'textPrimary'} > Asiel Alonso </Typography>
            <Typography variant={'body1'} color={'textPrimary'} > Customer </Typography>
            <Typography variant={'h5'} color={'textPrimary'} > alonsoasiel@gmail.com </Typography>
            <Typography variant={'body1'} color={'textPrimary'} > 10 Reservas concluidas </Typography>
        </div>
    )
}
export default Profile

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
        backgroundColor: customTheme.color.grayLight1
    }
});