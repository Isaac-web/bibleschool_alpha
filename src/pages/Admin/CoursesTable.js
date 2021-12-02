import React, {useEffect, useState} from 'react';
import {Button,Typography, Dialog, DialogContent, DialogActions, DialogTitle} from "@mui/material";
import {useSelector, useDispatch} from 'react-redux';
import {courses as courseActions} from "../../actions/Admin";

import AdminTable from "./AdminTable";
import Loading from "../../components/Loading";
import AppSnackbar from '../../components/AppSnackbar';
import { findLast } from "lodash-es";

const CoursesTable = () => {
  const { data: courses, loading } = useSelector((state) => state.adminCourses);

  const dispatch = useDispatch();
  const [searchResults, setSearchResults] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    color: "",
  });

  const handleSearch = (results) => {
    setSearchResults(results);
  };

  const openConfirmationDialog = (item) => {
    setOpenDialog(true);
    setSelectedCourse(item);
  };

  const clearDialog = () => {
    setSelectedCourse(null);
    setOpenDialog(false);
  };

  const notify = (message, color) => {
    setSnackbar({ open: true, message, color });
  };

  const handleDeleteCourse = (course) => {
    dispatch(courseActions.removeCourse(course._id, notify));
    setSelectedCourse(null);
    setOpenDialog(false);
  };

  useEffect(() => {
    dispatch(courseActions.fetchCourses());
  }, []);

  const mapToViewModule = (courses) => {
    return courses.map((c) => {
      const name = `${c.coordinator.firstname} ${c.coordinator.lastname}`;
      c.coordinator.name = name;

      return c;
    });
  };

  const courseTableColumns = [
    { path: "title", label: "Title" },
    { path: "coordinator.name", label: "Coordinator" },
    { path: "enrollments", label: "Enrollments" },
    {
      key: "delete",
      content: (item) => (
        <Button
          size="small"
          style={{ color: "red", textTransform: "none" }}
          onClick={() => openConfirmationDialog(item)}
        >
          Delete
        </Button>
      ),
    },
  ];

  if (loading) return <Loading />;

  const finalData = mapToViewModule(courses);
  return (
    <>
      <Typography variant="h4">Courses</Typography>
      <AdminTable
        columns={courseTableColumns}
        searchProperty="title"
        data={finalData}
        onSearch={handleSearch}
        searchResults={searchResults}
      />

      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>Confirmation</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete this course?</Typography>
        </DialogContent>
        <DialogActions>
          <Button style={{ textTransform: "none" }} onClick={clearDialog}>
            No
          </Button>
          <Button
            style={{ textTransform: "none" }}
            onClick={() => handleDeleteCourse(selectedCourse)}
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>

      <AppSnackbar
        open={snackbar.open}
        message={snackbar.message}
        color={snackbar.color}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      />
    </>
  );
};

export default CoursesTable
