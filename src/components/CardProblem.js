import React from 'react';

import { Card, CardContent, CardMedia, CardActions } from '@mui/material';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import { Box, Container } from '@mui/material';

import Report from '../img/report.jpg';
import ProblemListPages from './ProblemListPages';

const CardProblem = () => {
    const ProblemPages = () => {
        return(
            <div>
                {ProblemListPages}
            </div>
        )
    }
  return (
    <div>
        <Container sx={{mt: 10}}>
            <Card sx={{maxWidth: 500, height: 320}}>
                <CardMedia
                    sx = {{height: 140}}
                    image = {Report}
                    title = 'Report'
                />
                <CardContent>
                    <Typography variant='h5' fontWeight={600}>
                        Problem List
                    </Typography>
                    <Typography variant='body2' sx={{mt: 0.5}}>
                        Berbagai macam dokumen list problem yang terjadi serta penanganannya untuk beberapa unit model Magni dan Yale.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size='small' variant='contained' sx={{mb: 1}} onClick={ProblemPages} href='/problemList'>Temukan Disini</Button>
                </CardActions>
            </Card>
        </Container>
    </div>
  )
}

export default CardProblem