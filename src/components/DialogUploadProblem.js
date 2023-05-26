import { React, useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import { MenuItem, InputLabel, FormControl, Select} from '@mui/material';
import { Button } from '@mui/material';
import { Input } from '@mui/material';
import { Container } from '@mui/material';

const DialogUploadProblem = () => {
    //Dialog
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    //SetModel
    const [model, setModel] = useState('Magni');
    const handleChange = (e) => {
        setModel(e.target.value);
    }

    //SetFiles
    const [file, setFiles] = useState();
    const handleFileChange = (e) => {
        setFiles(e.target.files[0])
    };
    const handleUploadClick = () => {
        if(!file){
            return;
        }
    }

  return (
    <div>
        <Button variant='contained' onClick={handleClickOpen}>Submit Problem</Button>
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Submit Problem</DialogTitle>
            <DialogContent>
                <DialogContentText>Submit Problem of unit.</DialogContentText>
                <FormControl fullWidth sx={{mt: 4}}>
                    <InputLabel>Model Unit</InputLabel>
                    <Select
                        label='Model Unit'
                        onChange={handleChange}
                    >
                        <MenuItem value={1}>Magni</MenuItem>
                        <MenuItem value={2}>Yale</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    autoFocus
                    margin='dense'
                    label='Model Unit'
                    variant='standard'
                />
                <Container sx={{mt: 4}}>
                    <input type='file' onChange={handleFileChange} />
                </Container>
                
            </DialogContent>
        </Dialog>
    </div>
  )
}

export default DialogUploadProblem