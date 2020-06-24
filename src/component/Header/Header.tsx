import { AppBar, IconButton, Theme, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/styles';
import React, { FC } from 'react';
import customTheme from '../../theme';
import Brand from '../svg/Brand';
import FakeNavLink from './FakeNavLink';
import NavLink from './NavLink';
import { MobileMenu } from './MobileMenu';


export interface Menu {
  path: string;
  title: string;
  onClick?: () => void;
}
interface Props {
  userName?: string;
  links: Menu[];
  mobileMoreAnchorEl: HTMLElement | null;
  isMobileMenuOpen: boolean;
  handleMobileMenuClose: () => void;
  handleMobileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void
}

const Header: FC<Props> = ({ links, userName, mobileMoreAnchorEl, isMobileMenuOpen, handleMobileMenuOpen, handleMobileMenuClose }) => {
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
        <div className={classes.sectionDesktop} >
          {links.map(({ path, title, onClick }, i) =>
            onClick ? (
              <FakeNavLink key={i} onClick={onClick}>{title}</FakeNavLink>
            ) : (
                <NavLink key={i} to={path}>{title}</NavLink>
              ),
          )}
        </div>
        <div className={classes.sectionMobile}>
          <IconButton
            aria-label="show more"
            aria-controls={'mobileMenuId'}
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
            color="primary"
          >
            <MenuIcon />
          </IconButton>
        </div>
      </Toolbar>
      <MobileMenu
        handleMobileMenuClose={handleMobileMenuClose}
        isMobileMenuOpen={isMobileMenuOpen}
        mobileMoreAnchorEl={mobileMoreAnchorEl}
        links={links}
      />
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
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  };
});

export default Header;