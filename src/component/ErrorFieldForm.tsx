import React from 'react'
import { ErrorMessage } from 'formik'
import { makeStyles } from '@material-ui/styles';
import customTheme, { theme } from '../theme';

interface Props {
    name: string;
}

export const ErrorFieldForm = ({ name }: Props) => {
    const classes = useStyles()
    return <ErrorMessage className={classes.error} name={name} component="div" />
}

const useStyles = makeStyles({
    error: {
        color: customTheme.color.primaryDark,
        alignSelf: 'flex-start',
        fontSize: '.8rem'
    },
});

