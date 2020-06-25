import { CircularProgress, Typography, Avatar, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import Alert from '../../../component/Alert';
import customTheme, { theme } from '../../../theme';
import { Role } from '../../../utils/type';
import ColorLine from '../../../component/ColorLine';

interface Props {
  fullName: string;
  role: string;
  email: string;
  loading: boolean;
  bookingAmount?: number;
  errorMessage?: string;
  closeError: () => void;
}

const UserProfile = ({
  fullName,
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
      <Box boxShadow={3} bgcolor="background.paper">
        <div className={classes.containerProfile}>
          <Avatar
            className={classes.avatar}
            alt={fullName}
            src="https://cdn.pixabay.com/photo/2013/10/22/07/56/android-199225__340.jpg"
          />
          <div className={classes.loading}>
            {loading && <CircularProgress size={20} />}
          </div>
          <Typography
            className={classes.typography}
            variant="h4"
            color="textPrimary"
          >
            {fullName}
          </Typography>
          <Typography
            className={classes.typography}
            variant="h4"
            color="textPrimary"
          >
            {role}
          </Typography>
          <Typography
            className={classes.typography}
            variant="h5"
            color="textPrimary"
          >
            {email}
          </Typography>
          {role === Role.CLIENT && (
            <div className={classes.bookings}>
              <ColorLine color="white" height={1} />
              <Typography
                className={classes.typography}
                variant="body2"
                color="textPrimary"
              >
                {`${bookingAmount} completed bookings `}
                <ColorLine color="white" height={1} />
              </Typography>
            </div>
          )}
          <Alert
            message={errorMessage}
            open={!!errorMessage}
            onClose={closeError}
          />
        </div>
      </Box>
    </div>
  );
};

export default UserProfile;

const useStyles = makeStyles({
  container: {
    marginTop: customTheme.spacing.margin.medium,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerProfile: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minWidth: customTheme.dimension.width.medium,
    height: customTheme.dimension.height.big,
    backgroundColor: customTheme.color.thinkRed,
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: customTheme.border.normal,
  },
  typography: {
    color: customTheme.color.white,
    paddingBottom: customTheme.spacing.padding.smaller,
  },
  avatar: {
    width: customTheme.dimension.width.wAvatar,
    height: customTheme.dimension.height.hAvatar,
    marginTop: customTheme.spacing.margin.smaller,
    marginBottom: customTheme.spacing.margin.medium,
  },
  bookings: {
    padding: customTheme.spacing.padding.medium,
  },
  loading: {
    color: customTheme.color.primary,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
