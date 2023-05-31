import { React, useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import { MenuItem, InputLabel, FormControl, Select} from '@mui/material';
import { Button } from '@mui/material';
import { Input } from '@mui/material';
import { Container } from '@mui/material';

import { doc, addDoc, collection } from 'firebase/firestore';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import { db, storage } from '../firebase/firebaseconfig'; 

const initialValue = {
    brand: '',
    model: '',
    problem: '',
    file: [],
};

const DialogUploadProblem = () => {
    //Dialog
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    //SubmitData
    const [values, setValues] = useState(initialValue);
    const [brand, setBrand] = useState(initialValue.brand);
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    }
    const handleSelectChange = (e) => {
        setBrand(e.target.value)

    }
    const handleSubmit = async () => {
        try
        {
            const docRef = await addDoc(collection(db, "test"),
            {
                brand: values.brand,
                model: values.model,
                problem: values.problem,
            });
            const fileRef = ref(storage, values.file);
            uploadBytes(fileRef, values.file).then((snapshot) => {
                console.log('upload sucess')
            })
            

            handleClose();
            alert("Document Uploaded");
            window.location.reload();
            console.log(values)
        }
        catch (e)
        {
            console.error(e);
            alert(e);
        }
        
        
    }

   

  return (
    <div>
        <Button variant='contained' onClick={handleClickOpen}>Submit Problem</Button>
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Submit Problem</DialogTitle>
            <DialogContent>
                <DialogContentText>Submit Problem of unit.</DialogContentText>
                <form onSubmit={handleSubmit}>
                    <Select
                        name='brand'
                        value={values.brand}
                        label='Select Brand'
                        sx={{width: 550}}
                        onChange={handleInputChange}
                    >
                        <MenuItem value='Magni'>Magni</MenuItem>
                        <MenuItem value='Yale'>Yale</MenuItem>
                        <MenuItem value='Sennebogen'>Sennebogen</MenuItem>
                    </Select>
                    <TextField
                        autoFocus
                        margin="dense"
                        name='model'
                        label='Model'
                        fullWidth
                        variant="standard"
                        onChange={handleInputChange}
                    />
                    <TextField
                        autoFocus
                        margin='dense'
                        name='problem'
                        label='Problem'
                        fullWidth
                        variant='standard'
                        onChange={handleInputChange}
                    />
                    <Input type='file' sx={{mt: 2}} name='file' onChange={handleInputChange} />
                </form>
            </DialogContent>
            
            <DialogActions>
                <Button variant='contained' size='small' onClick={handleClose}>Close</Button>
                <Button variant='contained' size='small' type='submit' onClick={handleSubmit}>Submit</Button>
            </DialogActions>
        </Dialog>
    </div>
  )
}

export default DialogUploadProblem