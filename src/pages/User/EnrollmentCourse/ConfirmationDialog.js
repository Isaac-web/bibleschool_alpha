import React from 'react';
import {Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions} from "@mui/material";


const ConfirmationDialog = ({message, open, onClose, onYes, ...rest}) => {
    return (
        <Dialog
            maxWidth="xs"
            fullWidth    
            open={open}
            onClose={onClose}
            {...rest}
        >
            <DialogTitle>
                Start Quiz?
            </DialogTitle>
            <DialogContent>
                <Typography variant="body1">
                    {message}
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" style={{width: 100, textTransform: "none"}} onClick={onYes}>Yes</Button>
                <Button variant="outlined" style={{width: 100, textTransform: "none"}} onClick={onClose}>No</Button>
            </DialogActions>
    </Dialog>
    )
}

export default ConfirmationDialog
