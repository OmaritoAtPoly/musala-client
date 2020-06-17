import Button, { ButtonProps } from '@material-ui/core/Button';
import React from 'react';
import { makeStyles } from '@material-ui/styles';


export const PrimaryButton = (props: ButtonProps) => {
    const classes = useStyles()
    return <Button className={classes.button} size="small" fullWidth variant="contained" color='primary'   {...props} />
}

const useStyles = makeStyles({
    button: {
        margin: '10px auto',
        padding: '10px'
    },
});

