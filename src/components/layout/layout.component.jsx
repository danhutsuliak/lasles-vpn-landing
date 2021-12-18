import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../footer/footer.component';
import Header from '../header/header.component';

const Layout = () => (
  <div className="layout">
    <Header />
    <Outlet />
    <Footer />
  </div>
);

export default Layout;
