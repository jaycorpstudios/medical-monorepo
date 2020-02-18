import React from 'react';
import Router from 'next/router'
import { connect } from 'react-redux';
import classnames from 'classnames';
import NavigationBar from '../components/NavigationBar';
import UserHeader from '../components/UserHeader';
import MobileHeader from '../components/MobileHeader';
import AlertList from '../components/AlertList';
import styles from './MainLayout.module.scss';
import { getItemFromCache } from '@jaycorpstudios/medical-app/cache';


const Layout = ({ blur, children, ...rest }) => {
  const auth = getItemFromCache('auth');
  const isAuthenticated = auth && auth.authenticated ? auth.authenticated : false;
  const { blurApp, dashboard, mainContent } = styles;
  const dashboardStyles = classnames({ [blurApp]: blur }, dashboard);
  const app = (
    <div className={dashboardStyles}>
          <AlertList />
          <NavigationBar path={rest.path} />
          <UserHeader />
          <MobileHeader />
          <main className={mainContent}>
            {children}
          </main>
        </div>
  );
  // redirect to specific PAGE <LoginPage />
  const redirect = <Redirect to={{ pathname: '/', state: { from: matchProps.location } }} />;
  return isAuthenticated ? app : redirect;
};

const mapStateToProps = (state) => {
  const { app = {} } = state;
  return {
    blur: app.blur,
  };
};

export default connect(mapStateToProps)(Layout);
