import React from 'react';
import { Outlet } from 'react-router-dom';
import { StyledNavLink } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <StyledNavLink to="/">Home</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/add">Add Page</StyledNavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
