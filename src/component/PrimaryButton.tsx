import Button, { ButtonProps } from '@material-ui/core/Button';
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import theme from '../theme';


export const PrimaryButton = (props: ButtonProps) => {
    const classes = useStyles()
    return <Button className={classes.button} size="small" fullWidth variant="contained" color='primary'   {...props} />
}

const useStyles = makeStyles({
    button: {
        margin: `${theme.spacing.margin.small} auto`,
        padding: `${theme.spacing.margin.smaller}`
    },
});

