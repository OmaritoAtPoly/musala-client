import { Snackbar } from '@material-ui/core';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import React from 'react';

type Props = {
  message?: string;
  open?: boolean;
  severity?: string;
} & AlertProps;

const Alert = ({
  severity = 'error',
  message,
  open,
  onClose,
  ...rest
}: Props) => {
  return (
    <>
      <Snackbar open={open} autoHideDuration={3000} onClose={onClose}>
        <MuiAlert elevation={6} variant="filled" severity={severity} {...rest}>
          {message}
        </MuiAlert>
      </Snackbar>
    </>
  );
};

export default Alert;
