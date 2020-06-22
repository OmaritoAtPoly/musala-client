import { Theme, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

interface Props {
    description: string;
}

export const DescriptionPanel = ({ description }: Props) => {
    const classes = useStyles()
    return <Typography className={classes.text} variant='body2' color='textPrimary' >{description}</Typography>
}

const useStyles = makeStyles((theme: Theme) => ({
    text: {
        padding: theme.spacing(2)
    }
}));