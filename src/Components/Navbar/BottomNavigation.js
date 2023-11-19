import * as React from 'react';
import Box from '@mui/material/Box';

import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';


import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import { Container } from '@mui/material';

export default function MobileBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Container>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Home" icon={<CottageOutlinedIcon size="small"/>} />
        <BottomNavigationAction label="Categories" icon={<ListOutlinedIcon size="small"/>} />
        <BottomNavigationAction label="Orders" icon={<LocalShippingOutlinedIcon size="small"/>} />
        <BottomNavigationAction label="Account" icon={<AccountCircleOutlinedIcon size="small"/>} />
        <BottomNavigationAction label="Cart" icon={<ShoppingCartCheckoutIcon size="small"/>} />
      </BottomNavigation>
    </Container>
  );
}