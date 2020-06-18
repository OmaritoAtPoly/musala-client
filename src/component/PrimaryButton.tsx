import Button, { ButtonProps } from '@material-ui/core/Button';
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import customTheme from '../theme';


export const PrimaryButton = (props: ButtonProps) => {
    const classes = useStyles()
    return <Button className={classes.button} size="small" fullWidth variant="contained" color='primary'   {...props} />
}

const useStyles = makeStyles({
    button: {
        margin: `${customTheme.spacing.margin.small} auto`,
        padding: `${customTheme.spacing.margin.smaller}`
    },
});

