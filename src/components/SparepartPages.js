import React from 'react';

import { Container, Link } from '@mui/material';
import { Card, CardActions, CardMedia, CardContent } from '@mui/material';
import { Typography } from '@mui/material';

import Parts from '../img/parts.jpg';

import Navbar from './Navbar';
import SparePartData from '../data/SparepartData';

import PDFViewer from 'pdf-viewer-reactjs';


const SparepartPages = () => {
  return (
    <div>
        <Navbar />
        
        <Container
          sx={{mt: 10}}
        >
          <Card>
            <CardMedia
              sx = {{height: 150}}
              image = {Parts}
              title = 'Spare Parts'
            />
            <CardContent>
              <Typography variant='h5' fontWeight={600}>Sparepart Catalogue</Typography>
              <Typography variant='body1' sx={{mt: 1.5}}>Berbagai macam katalog sparepart untuk pencarian part number dari product MAGNI dan YALE</Typography>

              <Typography variant='h6' align='center' sx={{mt: 3}}>MAGNI ATTACHMENT</Typography>

              {SparePartData.map(
                  (data)=>
                  <ul>
                  <Link
                    component='button'
                    variant='body2'
                    onClick={() => {
                      window.open(data.pdfData)
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

export default SparepartPages