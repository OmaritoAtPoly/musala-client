import { Menu } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import FakeNavLink from './FakeNavLink';
import { Menu as LinkMenu } from './Header';
import NavLink from './NavLink';


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
        </Menu>
    );
}

const useStyles = makeStyles({
    menu: {
        display: 'flex',
        flexDirection: 'column'
    }
});
