/* eslint-disable @next/next/no-img-element */
'use client'
import styles from 'styles/mainNavbar.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function MainNavbar () {
  return (
    <div className={styles.mainBar}>
      <Navbar expand='lg' fixed='top' className='bg-body-tertiary' data-bs-theme='dark'>
        <Navbar.Brand href='#home' className={styles.brand}>
          <img
            alt='ratware rat'
            src='../ratware-logo.png'
            height={100}
            width={100}
          />
          ratware™
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Nav className={styles.navLinks}>
          <Nav.Link> home </Nav.Link>
          <NavDropdown title='products'>
            <NavDropdown.Item> shirts </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link> contact </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  )
}