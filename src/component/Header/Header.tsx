import { AppBar, Theme, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { FC } from 'react';
import customTheme from '../../theme';
import Brand from '../Brand';
import FakeNavLink from './FakeNavLink';
import NavLink from './NavLink';

export interface Menu {
  path: string;
  title: string;
  onClick?: () => void;
}
interface Props {
  userName?: string;
  links: Menu[];
}

const Header: FC<Props> = ({ links, userName }) => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="sticky">
      <Toolbar className={classes.toolbar}>
        <div>
          <NavLink className={classes.navLink} exact={true} to="/">
            <Brand />
          </NavLink>
          <NavLink exact={true} to="/profile">
            {userName}
          </NavLink>
        </div>
        <div>
          {links.map(({ path, title, onClick }) =>
            onClick ? (
              <FakeNavLink onClick={onClick}>{title}</FakeNavLink>
            ) : (
              <NavLink to={path}>{title}</NavLink>
            ),
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

const useStyles = makeStyles((theme: Theme) => {
  const spacing = {
    paddingLeft: customTheme.spacing.padding.none,
    paddingRight: customTheme.spacing.padding.none,
    margin: customTheme.spacing.margin.none,
  };

  return {
    appBar: {
      backgroundColor: theme.palette.background.default,
      boxShadow: 'unset',
      ...spacing,
    },
    toolbar: {
      ...spacing,
      display: 'flex',
      justifyContent: 'space-between',
    },
    navLink: {
      paddingRight: customTheme.spacing.padding.none,
    },
  };
});

export default Header;
