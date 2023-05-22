import React from 'react';

import { Card, CardContent, CardMedia, CardActions } from '@mui/material';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import { Box, Container } from '@mui/material';

import Parts from '../img/parts.jpg';
import SparepartPages from './SparepartPages';


const CardSpareparts = () => {
    const sparepartPages = () => {
        return(
            <div>
                {SparepartPages}
            </div>
        )
    }
  return (
    <div>
        <Container sx={{mt: 10}}>
            <Card sx={{maxWidth: 500, height: 320}}>
                <CardMedia
                    sx = {{height: 140}}
                    image = {Parts}
                    title = 'Spare Parts'
                />
                <CardContent>
                    <Typography variant='h5' fontWeight={600}>
                        Spareparts Catalogue
                    </Typography>
                    <Typography variant='body2' sx={{mt: 0.5}}>
                        Berbagai macam sparepart catalogue dan sparepart manual untuk beberapa unit model Magni dan Yale.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size='small' variant='contained' sx={{mb: 1}} onClick={sparepartPages} href='/sparepartCatalogue'>Temukan Disini</Button>
                </CardActions>
            </Card>
        </Container>
    </div>
  )
}

export default CardSpareparts