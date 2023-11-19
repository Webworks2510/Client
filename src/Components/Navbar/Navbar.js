import { Container } from '@mui/material';
import React from 'react';
import MobileBottomNavigation from './BottomNavigation';
import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';

function Navbar() {
  return (
    <Container >

      {/* Desktop View */}

      <Container maxWidth="fluid" sx={{ display:{xs:'none',sm:'block',position: 'fixed',top: 0,left: 0,background:'white'}}}>
        <DesktopNavigation/>
      </Container>
      

      {/* Mobile view */}

      <Container sx={{ display:{xs:'block',sm:'none'},position: 'fixed',top: 0,left: 0,background:'white'}}>
        <MobileNavigation/>
      </Container>

      <Container sx={{ display:{xs:'block',sm:'none'},position: 'fixed',bottom: 0,left: 0,background:'white',width:'100%'}}>
        <MobileBottomNavigation/>
      </Container>

    </Container>
  );
}

export default Navbar;
