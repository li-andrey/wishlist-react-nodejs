import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { PAGES } from './AppRouter';
import { Navbar, Nav } from 'react-bootstrap';

export const Navibar = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);

  const handleLogout = (event) => {
    event.preventDefault();
    auth.logout();
    history.push('/');
  };

  return (
    <Navbar className="navibar" collapseOnSelect expand="lg">
      {/*     <Navbar.Brand className="nav-brand"> FRIENDS WISHLIST </Navbar.Brand> */}
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <div className="nav-link">
            <Link to={PAGES.wishList.path}> {PAGES.wishList.title} </Link>
          </div>
          <div className="nav-link">
            <Link to={PAGES.howItWorks.path}> {PAGES.howItWorks.title} </Link>
          </div>
          <div className="nav-link">
            <Link to={PAGES.newWishList.path}> {PAGES.newWishList.title} </Link>
          </div>
        </Nav>
        <Nav>
          <button className="btn-exit" onClick={handleLogout}>
            Выйти
          </button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
