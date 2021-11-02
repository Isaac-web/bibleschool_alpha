import React from 'react';
import {Dialog, Box, DialogTitle, DialogContent, DialogActions, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";


const MiniDialog = ({children, open, verticalHeight,  onClose, title,  Header}) => {
    const classes = useStyles();


    return (
       <Dialog
            open={open}
            onClose={onClose}
            fullWidth
            maxWidth="xs"
            classes={{paper: classes.paper}}
        >
            <DialogTitle>
                <Box>
                    {title && <Typography variant="h6">{title}</Typography>}
                    {Header}
                </Box>
            </DialogTitle>

            <DialogContent 
                dividers
                style={{height:"50vh"}}
            >
                {children}
            </DialogContent>
       </Dialog>
    )
}




const useStyles = makeStyles(theme => ({
    paper: {
        background: "green", 
    }
}));



export default MiniDialog
