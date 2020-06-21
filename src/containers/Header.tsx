import { useApolloClient } from '@apollo/react-hooks';
import React, { FC, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import AppHeader from '../component/Header';
import { Menu } from '../component/Header/Header';
import { useCurrentUserQuery } from '../generate/types';
import { loggedIn, signOut } from '../utils/auth';

const Header: FC = () => {
  const client = useApolloClient();
  const { data } = useCurrentUserQuery({
    fetchPolicy: 'cache-first',
    errorPolicy: 'all',
  });

  const isHost = useMemo(() => data?.currentUser?.role === 'HOST', [data]);

  const { push } = useHistory();
  const auth = loggedIn();
  const links: Menu[] = [
    {
      path: '/',
      title: 'Home',
    },
  ];

  auth &&
    links.push({
      path: '/profile',
      title: 'Profile',
    });

  auth &&
    !isHost &&
    links.push({
      path: '/bookings',
      title: 'Booking',
    });

  auth &&
    isHost &&
    links.push({
      path: '/available',
      title: 'Available',
    });

  !auth &&
    links.push({
      path: '/sign-up',
      title: 'Sign Up',
    });

  links.push({
    path: auth ? '/' : '/login',
    title: auth ? 'Sign out' : 'Sign in',
    onClick: () => {
      signOut();
      client.resetStore();
      push('/login');
    },
  });

  return <AppHeader userName={data?.currentUser?.fullName} links={links} />;
};

export default Header;
