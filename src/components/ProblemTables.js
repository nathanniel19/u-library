import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { Paper } from '@mui/material';

import storage from '../firebase/firebaseconfig';
import { getStorage, ref, getDownloadURL } from "firebase/storage";


const gsReference = ref(storage, 'UnitDocumentation/TH 5.5.pdf');

const cliked = () => {
    getDownloadURL(gsReference)
        .then((url) => {
            
            const xhr = new XMLHttpRequest();
            xhr.responseType = 'blob';
            xhr.onload = (event) => {
              const blob = xhr.response;
            };
            xhr.open('GET', url);
            xhr.send();
        })
        .catch((error)=>{
            console.log('error')
        })

}

const urlView = () => {
    window.open('https://firebasestorage.googleapis.com/v0/b/u-library-68864.appspot.com/o/UnitDocumentation%2FTH%205.5.pdf?alt=media&token=94274884-22c2-47b9-973f-94c6415c1cde')
}

const ProblemTables = () => {
  return (
    <div>
        <TableContainer component={Paper} sx={{mt: 2}}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>No.</TableCell>
                        <TableCell align='right'>Brand</TableCell>
                        <TableCell align='right'>Model Unit</TableCell>
                        <TableCell align='right'>Problem</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    
                </TableBody>
            </Table>
        </TableContainer>
        <Typography variant='body1' sx={{mt:2}} onClick={urlView}>Test</Typography>

    </div>
  )
}

export default ProblemTables