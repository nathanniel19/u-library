import { React, useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { Paper } from '@mui/material';
import { Button } from '@mui/material';

import { storage } from '../firebase/firebaseconfig';
import { db } from '../firebase/firebaseconfig';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { getDocs, collection, doc } from 'firebase/firestore';

const downloadButtonCANBUS = () => {
    const storageRef = ref(storage, 'gs://u-library-68864.appspot.com/ProblemList/CAN Bus Architecture TH.pdf')
    getDownloadURL(storageRef).then((url) =>{
        window.open(url);
    })
}

const downloadDiagnosticTH = () => {
    const storageRef = ref(storage, 'gs://u-library-68864.appspot.com/ProblemList/Diagnostic TH.pdf');
    getDownloadURL(storageRef).then((url) => {
        window.open(url);
    })
}




const ProblemTables = () => {
    const [brands, setBrands] = useState([]);
    const [models, setModels] = useState([]);
    const [problems, setProblems] = useState([]);
    const [ids, setIds] = useState([]);

    useEffect(()=>{
        const dataFirebase = async () => {
            const querySnapshot =  await getDocs(collection(db, "test"));
            querySnapshot.forEach((doc) => {
                setBrands(current => [...current, doc.data().brand]);
                setModels(current => [...current, doc.data().model]);
                setProblems(current => [...current, doc.data().problem])
                setIds(current => [...current, doc.id]);
            });
        }
        dataFirebase();
    }, []);
  return (
    <div>
        <Button variant='outlined'>Test</Button>
        <TableContainer component={Paper} sx={{mt: 2, mb: 2}}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>No.</TableCell>
                        <TableCell align='right'>Brand</TableCell>
                        <TableCell align='right'>Model</TableCell>
                        <TableCell align='right'>Problem</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        {ids.map((id)=><TableCell align='right'>{id}</TableCell>)}
                    </TableRow>
                    <TableRow>
                        {brands.map((brand)=><TableCell align='right'>{brand}</TableCell>)}
                    </TableRow>
                    <TableRow>
                        {models.map((model)=><TableCell align='right'>{model}</TableCell>)}
                    </TableRow>
                    <TableRow>
                        {problems.map((problem)=><TableCell align='right'>{problem}</TableCell>)}
                    </TableRow>
                    
                </TableBody>
            </Table>
        </TableContainer>
        <TableContainer component={Paper} sx={{mt: 2}}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>No.</TableCell>
                        <TableCell align='right'>Brand</TableCell>
                        <TableCell align='right'>Model Unit</TableCell>
                        <TableCell align='right'>Problem</TableCell>
                        <TableCell align='right'>View/Download</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell align='right'>1</TableCell>
                        <TableCell align='right'>MAGNI</TableCell>
                        <TableCell align='right'>TH 6.20</TableCell>
                        <TableCell align='right'>CAN BUS Architecture</TableCell>
                        <TableCell align='right'>
                            <Button variant='contained' size='small' onClick={downloadButtonCANBUS}>
                                View File
                            </Button>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align='right'>2</TableCell>
                        <TableCell align='right'>MAGNI</TableCell>
                        <TableCell align='right'>TH 6.20</TableCell>
                        <TableCell align='right'>Diagnostic TH</TableCell>
                        <TableCell align='right'>
                            <Button variant='contained' size='small' onClick={downloadDiagnosticTH}>
                                View File
                            </Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
        

    </div>
  )
}

export default ProblemTables