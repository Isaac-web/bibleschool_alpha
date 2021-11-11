import React, {useState} from 'react';
import {Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField} from "@mui/material";
import {useTheme} from "@mui/styles";
import {useDispatch} from "react-redux";

import {Save, Cancel} from "@mui/icons-material";


import {addModule} from "../../../actions/Coordinator/modules";
import AppSnackbar from "../../../components/AppSnackbar";

const AddModuleDialog = ({open, onClose, title}) => {
    const dispatch = useDispatch();
    const initialFormData = {title: "", subtitle: ""}
    const [data, setData] = useState(initialFormData);
    const [snackbar, setSnackbar] = useState({open:false, message:"", color:""});
    


    const handleChange = ({target:input}) => setData({...data, [input.name]: input.value});

    const notify = (message, color) => {
        setSnackbar({...snackbar, open:true, message, color})
        onClose();
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(addModule(data, notify));
    }

    const raiseSort = () => {
        clear();
        onClose();
    }


    const clear = () => setData(initialFormData)


    const handleCancel = () => {
        clear();
        onClose();
    }

    
    return (
       <>
           <AppSnackbar 
                open={snackbar.open} 
                message={snackbar.message} 
                color={snackbar.color}
                onClose={() => setSnackbar({...snackbar, open: false})}
            />


           <Dialog
            open={open}
            onClose={raiseSort}
            fullWidth
            maxWidth="xs"
           >
               <DialogTitle>
                   {title ? title : "Dialog Title"}
               </DialogTitle>
               <form onSubmit={handleSubmit}>
                <DialogContent>
                        <TextField autoFocus name="title" onChange={handleChange} variant="standard" fullWidth  label="Title" style={{marginBottom: "1em"}}/>
                        <TextField name="subtitle" onChange={handleChange} variant="standard" fullWidth  label="Subtitle" style={{marginBottom: "1em"}}/>
                </DialogContent>
                <DialogActions>
                    <Button startIcon={<Cancel/>} onClick={handleCancel} variant="outlined"  style={{width: 100}}>Cancel</Button>
                    <Button endIcon={<Save/>} type="submit" variant="contained" style={{width: 100}}>Save</Button>
                </DialogActions>
               </form>
           </Dialog>
       </>
    )
}

export default AddModuleDialog
