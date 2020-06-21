import React, { useCallback } from 'react';
import UserProfile from '../component/Profile';
import { useCurrentUserQuery } from '../../../generate/types'
import { ErrorFieldForm } from '../../../component/ErrorFieldForm'
import { CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import customTheme from '../../../theme';
import { NO_DATA } from '../../../utils/constants'


const Profile = () => {
    const classes = useStyles()
    const { data, loading, error } = useCurrentUserQuery();
    const prepareData = useCallback((data) => {
        return {
            name: data?.currentUser?.fullName,
            email: data?.currentUser?.email,
            role: data?.currentUser?.role,
            bookingAmount: 30
        }
    }, [data])

    if (loading) {
        return <div className={classes.container}><CircularProgress className={classes.loading} size={25} /></div>
    }
    if (error) {
        return <ErrorFieldForm name={NO_DATA} />
    }

    return <UserProfile {...prepareData(data)} />
}

const useStyles = makeStyles({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    },
    loading: {
        color: customTheme.color.grayDark4,
        marginTop: customTheme.spacing.margin.m10,
    }
})

export default Profile

