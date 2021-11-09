import React from 'react'
import {Snackbar} from "@mui/material";

const AppSnackbar = ({color, message, open, onClose, ...rest}) => {
    return (
        <Snackbar
            message={message}
            open={open}
            onClose={onClose}
            ContentProps={{style: {backgroundColor: color}}}
            autoHideDuration={3000}
            {...rest}
        />
    )
}

export default AppSnackbar
