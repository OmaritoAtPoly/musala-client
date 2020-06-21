import Button, { ButtonProps } from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
import React, { FC } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import customTheme from '../../theme';

const Link: FC<ButtonProps & NavLinkProps> = (props) => {
  const classes = useStyles();
  return (
    <Button
      classes={{ root: classes.navLink }}
      component={({ innerRef, ...innerProps }: any) => (
        <NavLink {...props} {...innerProps} />
      )}
      {...props}
    />
  );
};

const useStyles = makeStyles({
  navLink: {
    paddingLeft: customTheme.spacing.padding.small,
    paddingRight: customTheme.spacing.padding.small,
  },
});

export default Link;
