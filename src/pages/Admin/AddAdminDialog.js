import React, {useState} from 'react';
import UsersDialog from "./UsersDialog";
import {useDispatch} from "react-redux";
import {Snackbar} from "@mui/material";

import {addAdmin} from "../../actions/Admin/admins";


const AddAdminDialog = ({open, onClose}) => {
    const [snackbar, setSnackbar] = useState({open: false, message: "", color: ""});
    const dispatch = useDispatch();


    const notify = (message, color) => {
        setSnackbar({...snackbar, open: true, message, color});
    }


    const handleUserSelect = (user) => {
        dispatch(addAdmin(user, notify));
    }

    return (
        <>
            <Snackbar
                message={snackbar.message}
                open={snackbar.open}
                autoHideDuration={3000}
                ContentProps={{style: {backgroundColor: snackbar.color}}}
                onClose={() => {setSnackbar({...snackbar, open: false})}}
            />
            <UsersDialog 
                closeAfterSelect
                open={open} 
                onClose={onClose} 
                onUserSelect={handleUserSelect}
            />
        </>
    )
}

export default AddAdminDialog
