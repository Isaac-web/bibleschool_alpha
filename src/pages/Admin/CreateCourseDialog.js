import React, {useState} from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
  TextField,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { makeStyles } from "@mui/styles";

import Input from "../../components/Input";
import UsersDialog from "./UsersDialog";
import courseActions from "../../actions/Admin/courses";

const useStyles = makeStyles((theme) => ({
  dropDownButton: {
    display: "none",
  },
}));

const CreateCourseDialog = ({ open, onClose, title }) => {
  const initialCourseData = { title: "", coordinator: { _id: "", name: "" } };
  const classes = useStyles();
  const dispatch = useDispatch();
  const [openUsersDialog, setOpenUsersDialog] = useState(false);
  const [courseData, setCourseData] = useState(initialCourseData);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    color: "",
  });

  const handleOpenuserDialog = () => {
    setOpenUsersDialog(true);
  };

  const handleCloseUserDialog = () => {
    setOpenUsersDialog(false);
  };

  const handleInputChange = ({ target: input }) => {
    setCourseData({ ...courseData, title: input.value });
  };

  const setCoordinator = (user) => {
    const newState = { ...courseData };
    const coordinator = { ...newState.coordinator };
    coordinator._id = user._id;
    coordinator.name = `${user.firstname} ${user.lastname}`;
    newState.coordinator = coordinator;
    setCourseData(newState);
  };

  const nofity = (message, color) => {
    setSnackbar({ ...snackbar, open: true, message, color });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!courseData.title.trim().length || courseData.title.trim().lenth < 3)
      return;
    if (!courseData.coordinator._id) return;

    dispatch(courseActions.addCourse(courseData, nofity));
    clear();
  };

  const clear = () => {
    onClose();
    setCourseData(initialCourseData);
  };

  return (
    <>
      <Snackbar
        message={snackbar.message}
        open={snackbar.open}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        autoHideDuration={3000}
        ContentProps={{ style: { backgroundColor: snackbar.color } }}
      />
      <UsersDialog
        open={openUsersDialog}
        onClose={handleCloseUserDialog}
        closeAfterSelect
        onUserSelect={setCoordinator}
      />
      <form onSubit={handleSubmit}>
        <Dialog fullWidth maxWidth="sm" open={open} onClose={onClose}>
          <DialogTitle>{title}</DialogTitle>
          <DialogContent>
            <TextField
              onChange={handleInputChange}
              value=""
              label="Title"
              fullWidth
              style={{ marginBottom: "1em" }}
              variant="standard"
              InputLabelProps={{ shrink: true }}
            />
            <Button
              className={classes.dropDownButton}
              onClick={handleOpenuserDialog}
              variant="outlined"
              style={{ textTransform: "none" }}
            >
              {courseData.coordinator.name || "Coordinator (Click here)"}
            </Button>
          </DialogContent>
          <DialogActions>
            <Button onClick={clear}>Cancel</Button>
            <Button type="submit" onClick={handleSubmit}>
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </form>
    </>
  );
}; 
 
 
 
 
 
 
export default CreateCourseDialog
 