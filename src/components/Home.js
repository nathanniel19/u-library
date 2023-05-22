import React from 'react';

import { Grid } from '@mui/material';
import { Stack, Divider, Box, Typography, Container } from '@mui/material';

import Navbar from './Navbar';
import CardSpareparts from './CardSpareparts';
import CardUnit from './CardUnit';
import CardProblem from './CardProblem';

const Home = () => {
  return (
    <div>
        <Navbar />
        <Container>
            <Typography 
                variant = 'subtitle1'
                marginTop={10}
                align='center'
            >
                E-Library untuk database dokumentasi sparepart maupun unit di PT. UNIVERSAL TRAKTOR INDONESIA
            </Typography>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: {xs: "column", md: "row"},
                    gap: 2,
                    justifyContent: "space-between"
                }}
            >
                <CardSpareparts />
                <CardUnit />
                <CardProblem />
            </Box>
        </Container>

        
    </div>
  )
}

export default Home