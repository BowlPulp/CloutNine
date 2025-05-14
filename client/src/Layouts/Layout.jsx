import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import FlipNavWrapper from '../components/FlipNav';
import WhatsAppButton from '../components/WhatsAppFloatButton';
import WhatsAppFloatButton from '../components/WhatsAppFloatButton';
import { Example } from '../components/SimpleFloatingNav';
function Layout() {
  return (
    <div>
        {/* <FlipNavWrapper/> */}
        <Example/>
        <WhatsAppFloatButton/>
        {/* Render the nested routes for the User role */}
        <Outlet />
       <Footer/>
      </div>
  );
}

export default Layout;
