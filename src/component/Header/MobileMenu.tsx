import React from 'react'
import { Menu, MenuItem, IconButton, Badge, Theme } from '@material-ui/core';

import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Menu as LinkMenu } from './Header';
import FakeNavLink from './FakeNavLink';
import NavLink from './NavLink';
import { makeStyles } from '@material-ui/styles';

interface Props {
    mobileMoreAnchorEl: HTMLElement | null;
    isMobileMenuOpen: boolean;
    handleMobileMenuClose: () => void;
    links: LinkMenu[];
}

export const MobileMenu = ({ mobileMoreAnchorEl, isMobileMenuOpen, handleMobileMenuClose, links }: Props) => {
    const classes = useStyles()
    return (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={'mobileMenuId'}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <div className={classes.menu} >
                {links.map(({ path, title, onClick }, i) =>
                    onClick ? (
                        <FakeNavLink key={i} onClick={onClick}>{title}</FakeNavLink>
                    ) : (
                            <NavLink key={i} to={path}>{title}</NavLink>
                        ),
                )}
            </div>
            {/* <MenuItem>
                <IconButton aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton aria-label="show 11 new notifications" color="inherit">
                    <Badge badgeContent={11} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem> */}
        </Menu>
    );
}

const useStyles = makeStyles({
    menu: {
        display: 'flex',
        flexDirection: 'column'
    }
});
