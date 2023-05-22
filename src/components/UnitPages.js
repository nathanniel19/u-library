import React from 'react';

import { Container, Link } from '@mui/material';
import { Card, CardActions, CardMedia, CardContent } from '@mui/material';
import { Typography } from '@mui/material';

import Unit from '../img/unit.jpg';

import Navbar from './Navbar';
import UnitData from '../data/UnitData';

import PDFViewer from 'pdf-viewer-reactjs';


const UnitPages = () => {
  return (
    <div>
        <Navbar />
        
        <Container
          sx={{mt: 10}}
        >
          <Card>
            <CardMedia
              sx = {{height: 150}}
              image = {Unit}
              title = 'Unit Manual'
            />
            <CardContent>
              <Typography variant='h5' fontWeight={600}>Unit Documentation</Typography>
              <Typography variant='body1' sx={{mt: 1.5}}>Berbagai macam dokumentasi unit dari product MAGNI dan YALE</Typography>

              <Typography variant='h6' align='center' sx={{mt: 3}}>MAGNI</Typography>

              {UnitData.map(
                  (data)=>
                  <ul>
                  <Link
                    component='button'
                    variant='body2'
                    onClick={() => {
                      window.open(data.urlData)
                    }}
                    
                  >
                    {data.title}
                  </Link>
                  </ul>
                )
              }
            </CardContent>
          </Card>
        </Container>
    </div>
  )
}

export default UnitPages