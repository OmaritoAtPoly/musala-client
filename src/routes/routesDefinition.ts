import { lazy } from 'react';

const routesDefinition = [
  {
    exact: true,
    path: "/login",
    component: lazy(() => import('../page/LoginPage')),
    needLoggedIn: false,
  },
  {
    exact: true,
    path: "/sign-up",
    component: lazy(() => import('../page/Signup')),
    needLoggedIn: false,
  },
  {
    exact: true,
    path: "/",
    component: lazy(() => import('../page/Home')),
    needLoggedIn: false,
  },
  {
    exact: true,
    path: "/profile",
    component: lazy(() => import('../page/Profile')),
    needLoggedIn: true,
  },
  {
    exact: true,
    path: "/details-ad:id",
    component: lazy(() => import('../page/AdPage')),
    needLoggedIn: false,
  }
];

export default routesDefinition;