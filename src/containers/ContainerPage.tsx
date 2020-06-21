import React, { useMemo } from 'react';
import PageLayout from '../component/PageLayout';
import { useHistory, Redirect } from 'react-router-dom';
import routesDefinition from '../routes/routesDefinition';
import { loggedIn } from '../utils/auth';
import AppHeader from './Header';

const ContainerPage = ({children}: React.PropsWithChildren<{}>) => {
  const { location: { pathname } } = useHistory();
  const redirectToLogin = useMemo(
    () => {
      const currentRoute = routesDefinition.find(({ path })=> path === pathname);
      return currentRoute?.needLoggedIn && !loggedIn();
    },
    [pathname],
  )

  if(redirectToLogin) {
    return <Redirect to={"/login"} />
  }

  return (
    <PageLayout>
      <AppHeader />
      {children}
    </PageLayout>
    )};

export default ContainerPage;