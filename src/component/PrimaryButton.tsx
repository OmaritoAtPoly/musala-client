import Button, { ButtonProps } from '@material-ui/core/Button';
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import customTheme from '../theme';
import { CircularProgress } from '@material-ui/core';

type Props = {
  loading?: boolean;
} & ButtonProps;

export const PrimaryButton = ({loading, children, ...rest}: Props) => {
    const classes = useStyles();

    return <Button className={classes.button} size="small" fullWidth variant="contained" color='primary'   {...rest} >
      { loading && <CircularProgress className={classes.loading} size={20} /> }
      { !loading && children }
    </Button>
}

const useStyles = makeStyles({
    button: {
        margin: `${customTheme.spacing.margin.small} auto`,
        padding: customTheme.spacing.margin.smaller
    },
    loading: {
      color: customTheme.color.white,
    }
});

