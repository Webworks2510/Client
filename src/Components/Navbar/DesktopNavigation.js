import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
    Box,
    Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import TuneIcon from '@mui/icons-material/Tune';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import AccountDropdown from './AccountDropdown';
import MoreDropDown from './MoreDropDown';

function DesktopNavigation() {

    //* toggle the dropdown for account and more

  const [isAccountDropdownVisible, setAccountDropdownVisible] = useState(false);
  const [isMoreDropdownVisible, setMoreDropdownVisible] = useState(false);

  const accountRef = useRef(null);
  const moreRef = useRef(null);

  const handleAccountClick = () => {
    setAccountDropdownVisible(!isAccountDropdownVisible);
  };

  const handleMoreClick = () => {
    setMoreDropdownVisible(!isMoreDropdownVisible);
  };

  const handleOutsideClick = (event) => {
    if (accountRef.current && !accountRef.current.contains(event.target)) {
      setAccountDropdownVisible(false);
    }

    if (moreRef.current && !moreRef.current.contains(event.target)) {
      setMoreDropdownVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <Grid sx={{ padding: '15px 30px' }} container>
      <Grid fullWidth sx={{ display: 'flex' }} item sm={8}>
        <Grid lg={2} sm={4} md={4}>
          <Link to={'/'}>
            <Typography variant="h6" component="h2">
              <div className='logo'>Web Works</div>
            </Typography>
          </Link>
        </Grid>

        <Grid lg={8} sm={6} md={7}>
          <TextField
            id="outlined-basic"
            placeholder='Search Categories, Products, Brands and More'
            fullWidth
            size="small"
            variant="outlined"
            InputProps={{
              startAdornment: <SearchIcon className='ww-large-icon' fontSize="medium" />,
            }}
          />
        </Grid>

        <Grid lg={1} sm={2} style={{ paddingLeft: '1rem', display: 'flex', alignItems: 'center' }}>
          <Link className='ww-link' to={'/'}>
            <TuneIcon className='ww-large-icon' />
          </Link>
        </Grid>
      </Grid>

      <Grid container item sm={4} gap={2} justifyContent="flex-end" alignItems="center">
        <div
          className='ww-link ww-pointer'
          style={{ display: 'flex', alignItems: 'center', gap: '3px', position: 'relative' }}
          ref={accountRef}
          onClick={handleAccountClick}
        >
          <AccountCircleOutlinedIcon className='ww-large-icon' /> 
          <Box sx={{ display:{sm:'none',md:'block'}}}>Account </Box>
          <KeyboardArrowDownOutlinedIcon/>
          {isAccountDropdownVisible && <AccountDropdown />}
        </div>
        <Link
          to={'/'}
          className='ww-link'
          style={{ display: 'flex', alignItems: 'center', gap: '5px' }}
        >
          <ShoppingCartCheckoutIcon className='ww-large-icon ww-pointer' />
          <Box sx={{ display:{sm:'none',md:'block'}}}>Cart</Box>
        </Link>
        <div
          className='ww-link'
          onClick={handleMoreClick}
          ref={moreRef}
        >
          <MoreVertOutlinedIcon className='ww-large-icon ww-pointer' />
          {isMoreDropdownVisible && <MoreDropDown />}
        </div>
      </Grid>
    </Grid>
  );
}

export default DesktopNavigation;
