import React from 'react';

import { Card, CardContent, CardMedia, CardActions } from '@mui/material';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import { Box, Container } from '@mui/material';

import Unit from '../img/unit.jpg';
import UnitPages from '../components/UnitPages'

const CardUnit = () => {
    const unitPages = () => {
        return(
            <div>
                {UnitPages}
            </div>
        )
    }
  return (
    <div>
        <Container sx={{mt: 10}}>
            <Card sx={{maxWidth: 500, maxHeight: 320}}>
                <CardMedia
                    sx = {{height: 140}}
                    image = {Unit}
                    title = 'Unit'
                />
                <CardContent>
                    <Typography variant='h5' fontWeight={600}>
                        Unit Documentation
                    </Typography>
                    <Typography variant='body2' sx={{mt: 0.5}}>
                        Berbagai macam dokumen unit seperti manual book atau operation manual untuk beberapa unit model Magni dan Yale.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size='small' variant='contained' sx={{mb: 1}} onClick={unitPages} href='/unitManual'>Temukan Disini</Button>
                </CardActions>
            </Card>
        </Container>
    </div>
  )
}

export default CardUnit