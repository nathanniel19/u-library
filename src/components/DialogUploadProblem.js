import { React, useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import { MenuItem, InputLabel, FormControl, Select} from '@mui/material';
import { Button } from '@mui/material';
import { Input } from '@mui/material';
import { Container } from '@mui/material';

import { doc, addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase/firebaseconfig'; 

const initialValue = {
    mail: '',
    pass: '',
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
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    }
    const handleSubmit = async () => {
        try
        {
            const docRef = await addDoc(collection(db, "test"),
            {
                brand: values.brand,
                model: values.model,
                problem: values.problem,
            })
            handleClose();
            alert("Document Uploaded");
            window.location.reload();
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
                    <TextField
                        autoFocus
                        margin="dense"
                        name='brand'
                        label='Brand'
                        fullWidth
                        variant="standard"
                        onChange={handleInputChange}
                    />
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