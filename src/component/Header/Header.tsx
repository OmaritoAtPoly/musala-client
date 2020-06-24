import { AppBar, Badge, IconButton, Menu, MenuItem, Theme, Toolbar } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { makeStyles } from '@material-ui/styles';
import React, { FC } from 'react';
import customTheme from '../../theme';
import Brand from '../svg/Brand';
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
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };



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
            aria-controls={mobileMenuId}
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
            color="primary"
          >
            <MenuIcon />
          </IconButton>
        </div>
      </Toolbar>
      {renderMobileMenu}
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