import { React } from 'react';

import { Container, Typography } from '@mui/material';
import { Card, CardActions, CardContent, CardMedia } from '@mui/material';
import { Button } from '@mui/material';


import Navbar from './Navbar';
import ProblemTables from './ProblemTables';
import DialogUploadProblem from './DialogUploadProblem';

import Report from '../img/report.jpg';



const ProblemListPages = () => {
  return (
    <div>
        <Navbar />
        
        <Container sx={{mt: 10}}>
          <Card>
            <CardMedia
              sx = {{height: 150}}
              image = {Report}
              title = 'Problem List'
            />
            <CardContent>
              <Typography sx={{textAlign: 'center', fontWeight: 600}} variant='h5'>Problem List</Typography>
              <Container sx={{}}>
                <DialogUploadProblem />
              </Container>
              <ProblemTables />
              
            </CardContent>
          </Card>
            
        </Container>
        
    </div>
  )
}

export default ProblemListPages