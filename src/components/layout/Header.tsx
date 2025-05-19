'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const navLinks = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Menu',
    path: '#',
  },
  {
    label: 'Contact',
    path: '/contact',
  },
];

const Header = () => {
  const [navbarBg, setNavbarBg] = useState('transparent');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarBg('#007a33');
      } else {
        setNavbarBg('transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <Navbar
      expand="lg"
      sticky="top"
      className="p-4"
      style={{
        backgroundColor: navbarBg,
        transition: 'background-color 0.3s ease',
      }}
      variant={navbarBg === 'transparent' ? 'light' : 'dark'}
    >
      <Container>
        <Navbar.Brand
          href="#"
          style={{
            fontWeight: 'bold',
            color: navbarBg === 'transparent' ? '#000' : '#fff',
          }}
        >
          LOGO
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {navLinks.map((link) => (
              <Nav.Link
                key={link.path}
                as={Link}
                href={link.path}
                style={{
                  color: navbarBg === 'transparent' ? '#000' : '#fff',
                }}
              >
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
