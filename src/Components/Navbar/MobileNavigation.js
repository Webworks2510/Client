import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import TuneIcon from '@mui/icons-material/Tune';
import { Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

function MobileNavigation() {
  return (
    <div>
        <Grid sx={{ padding: '15px 0px' ,display:'flex',alignItems:'center'}} container spacing={2}>
            <Grid item xs={7}>
                <Link to={'/'}>
                    <Typography variant="h6" component="h6">
                        <div className='logo'>Web Works</div>
                    </Typography>
                </Link>
            </Grid>
            <Grid container item xs={5} gap={1} justifyContent="flex-end">
                <SupportAgentOutlinedIcon fontSize="medium" />
                <p>Help care</p>
            </Grid>
            
        </Grid>
        <Grid sx={{ padding: '15px 15px' }} fullWidth container spacing={2}>
            <Grid xs={11}>
                <TextField
                id="outlined-basic"
                placeholder='Search Categories, Products, Brands and More'
                fullWidth
                size="small"
                variant="outlined"
                InputProps={{
                    startAdornment: <SearchIcon fontSize="small" />,
                }}
                />
            </Grid>

            <Grid xs={1} style={{ paddingLeft: '1rem', display: 'flex', alignItems: 'center' }}>
                <TuneIcon fullWidth fontSize="medium" />
            </Grid> 
        </Grid>
    </div>
  )
}

export default MobileNavigation