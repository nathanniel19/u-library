import React from 'react';
import { Container, AppBar, Typography } from '@mui/material';


const Navbar = () => {
  return (
    <div>
        <Container>
            <AppBar position='fixed'>
                <Typography variant='h5' align='center'>U-Library</Typography>
            </AppBar>
        </Container>
    </div>
  )
}

export default Navbar