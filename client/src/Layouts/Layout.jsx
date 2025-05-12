import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import FlipNavWrapper from '../components/FlipNav';
import WhatsAppButton from '../components/WhatsAppFloatButton';
import WhatsAppFloatButton from '../components/WhatsAppFloatButton';
function Layout() {
  return (
    <div>
        <FlipNavWrapper/>
        <WhatsAppFloatButton/>
        {/* Render the nested routes for the User role */}
        <Outlet />
       <Footer/>
      </div>
  );
}

export default Layout;
