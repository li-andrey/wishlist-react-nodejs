import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { PAGES } from './AppRouter'
import { Navbar, Nav, Button } from 'react-bootstrap'

export const Navibar = () => {
  const history = useHistory()
  const auth = useContext(AuthContext)

  const handleLogout = event => {
    event.preventDefault()
    auth.logout()
    history.push('/')
  }


  return (
    <Navbar className='navibar' collapseOnSelect expand='md' >
      {/*  <Navbar.Brand> MyWishList </Navbar.Brand> */}
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link>
            <Link to={PAGES.wishList.path}> {PAGES.wishList.title} </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to={PAGES.howItWorks.path}> {PAGES.howItWorks.title} </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to={PAGES.newWishList.path}> {PAGES.newWishList.title} </Link>
          </Nav.Link>
        </Nav>
        <Nav>
          <Button variant='primary'>
            <a href={PAGES.wishList.path} onClick={handleLogout} > Выйти </a>
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar >
  )

}