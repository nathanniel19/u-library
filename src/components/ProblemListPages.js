import React from 'react';

import { Container, Typography } from '@mui/material';
import Navbar from './Navbar';

const ProblemListPages = () => {
    const msg = 'Sorry belum kedevelop :)'
  return (
    <div>
        <Navbar />
        
        <Container sx={{mt: 40}}>
            <Typography variant='h3' fontWeight={600} align='center'>HEHEHEHE</Typography>
            <Typography variant='h6' align='center'>{ msg }</Typography>
        </Container>
        
    </div>
  )
}

export default ProblemListPages