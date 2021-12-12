import React from 'react';
import {
  Dialog,
  Box,
  DialogTitle,
  DialogContent,
  Typography,
} from "@mui/material";
import {makeStyles} from "@mui/styles";
import { useDispatch } from "react-redux";

const MiniDialog = ({
  children,
  open,
  verticalHeight,
  onClose,
  title,
  Header,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const raiseClose = () => {
    dispatch({ type: "USER_LOAD_STOPPED" });
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={raiseClose}
      fullWidth
      maxWidth="xs"
      classes={{ paper: classes.paper }}
    >
      <DialogTitle>
        <Box>
          {title && <Typography variant="h6">{title}</Typography>}
          {Header}
        </Box>
      </DialogTitle>

      <DialogContent dividers style={{ height: "50vh" }}>
        {children}
      </DialogContent>
    </Dialog>
  );
};




const useStyles = makeStyles(theme => ({
    paper: {
        background: "green", 
    }
}));



export default MiniDialog
