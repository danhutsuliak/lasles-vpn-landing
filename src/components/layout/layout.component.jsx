import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../footer/footer.component';
import Header from '../header/header.component';
import SubscribeNow from '../subscribe-now/subscribe-now.component';

const Layout = () => (
  <div className="layout">
    <Header />
    <Outlet />
    <SubscribeNow />
    <Footer />
  </div>
);

export default Layout;
