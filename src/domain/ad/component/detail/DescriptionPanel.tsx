import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import customTheme from '../../../../theme';

interface Props {
    description: string;
}

export const DescriptionPanel = ({ description }: Props) => {
    const classes = useStyles()
    return <Typography className={classes.text} variant='body1' >{description}</Typography>
}

const useStyles = makeStyles({
    text: {
        margin: `${customTheme.spacing.margin.medium} auto`
    }
});