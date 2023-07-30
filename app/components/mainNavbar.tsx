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
      <Navbar expand='lg' fixed='top' className='bg-body-tertiary'>
        <Navbar.Brand href='#home'>
          <img
            alt='ratware rat'
            src='../ratware-take2.jpg'
            height={100}
            width={100}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
      </Navbar>
    </div>
  )
}