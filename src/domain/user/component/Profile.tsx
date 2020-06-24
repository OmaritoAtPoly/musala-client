import React from 'react';
import { makeStyles } from '@material-ui/styles';
import customTheme from '../../../theme';
import { Typography, CircularProgress } from '@material-ui/core';
import Alert from '../../../component/Alert';

interface Props {
  name: string;
  role: string;
  email: string;
  loading: boolean;
  bookingAmount?: number;
  errorMessage?: string;
  closeError: () => void;
}

const UserProfile = ({
  name,
  role,
  email,
  loading,
  bookingAmount,
  errorMessage,
  closeError,
}: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.avatar} />
      <div className={classes.loading}>
        {loading && <CircularProgress size={20} />}
      </div>
      <Typography variant={'h4'} color={'textPrimary'}>
        {` ${name} `}
      </Typography>
      <Typography variant={'body1'} color={'textPrimary'}>
        {`${role} `}
      </Typography>
      <Typography variant={'h5'} color={'textPrimary'}>
        {` ${email} `}
      </Typography>
      {bookingAmount && (
        <Typography variant={'body1'} color={'textPrimary'}>
          {`${bookingAmount} completed bookings `}
        </Typography>
      )}
      <Alert
        message={errorMessage}
        open={!!errorMessage}
        onClose={closeError}
      />
    </div>
  );
};

export default UserProfile;

const useStyles = makeStyles({
  container: {
    marginTop: customTheme.spacing.margin.m10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    width: `${customTheme.dimension.width.wAvatar}`,
    height: `${customTheme.dimension.height.hAvatar}`,
    margin: `${customTheme.spacing.margin.smaller}`,
    borderRadius:`${customTheme.borderRadius.half}`,
    backgroundColor: customTheme.color.grayLight2,
  },
  loading: {
    color: customTheme.color.primary,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
