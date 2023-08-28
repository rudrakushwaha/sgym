import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import { UserContext } from '../App'

import Logo from '../assets/images/Logo.png';

const Navbar = () => {

  const { state, dispatch } = useContext(UserContext)


  const RenderMenu = () => {
    if (state) {
      return (
        <>
         <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', }}>Home</Link>
      {/* <Link style={{ textDecoration: 'none', color: '#3A1212', }} exact activeClassName="active-page" className="nav-Link" to="/login">Login</Link> */}

      {/* <Link style={{ textDecoration: 'none', color: '#3A1212', }} exact activeClassName="active-page" className="nav-Link" to="/signup">register</Link> */}
      <Link style={{ textDecoration: 'none', color: '#3A1212', }} exact activeClassName="active-page" className="nav-Link" to="/exercises">Exercises</Link>
      <Link style={{ textDecoration: 'none', color: '#3A1212', }} exact activeClassName="active-page" className="nav-Link" to="/logout">Logout</Link>
        </>
      )
    } else {
      return (
        <>
          <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', }}>Home</Link>
      <Link style={{ textDecoration: 'none', color: '#3A1212', }} exact activeClassName="active-page" className="nav-Link" to="/login">Login</Link>

      <Link style={{ textDecoration: 'none', color: '#3A1212', }} exact activeClassName="active-page" className="nav-Link" to="/signup">register</Link>
      <Link style={{ textDecoration: 'none', color: '#3A1212', }} exact activeClassName="active-page" className="nav-Link" to="/exercises">Exercises</Link>
      {/* <Link style={{ textDecoration: 'none', color: '#3A1212', }} exact activeClassName="active-page" className="nav-Link" to="/logout">Logout</Link> */}

        </>
      )
    }

  }

 return (<>
  <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
    <Link to="/">
      <img src={Logo} alt="logo" style={{ width: '48px', height: '48px', margin: '0px 20px' }} />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      <RenderMenu />

      {/* <a href="/exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>Exercises</a> */}
    </Stack>
  </Stack>
  </>)
};

export default Navbar;
