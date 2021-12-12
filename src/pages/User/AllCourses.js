import React, {useEffect, useState} from 'react';
import {Container,Typography, Grid, TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";



import {getAllCourses} from "../../actions/Users/Courses";
import CourseCard from "./CourseCard";
import formatSearchText from '../../utils/formatSearchText';
import {addEnrollment} from "../../actions/Users/Enrollment";
import * as authService from "../../services/userServices";
import AppSnackbar from "../../components/AppSnackbar";
import Loading from "../../components/Loading";

const AllCourses = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [searchResults, setSearchResults] = useState([]);
  const [loadingEnrollments, setLoadingEnrollments] = useState([]);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    color: "",
  });

  const { data: courses, loading } = useSelector((state) => state.courses);

  useEffect(() => {
    dispatch(getAllCourses());
  }, []);

  const redirect = () => history.push("/user");

  const notify = (message, color) => {
    setLoadingEnrollments([]);
    setSnackbar({ ...snackbar, open: true, message, color });
  };
  const handleEnroll = (id) => {
    const user = authService.getCurrentUser();
    const data = { userId: user._id, courseId: id };
    setLoadingEnrollments([...loadingEnrollments, id]);
    dispatch(addEnrollment(data, redirect, notify));
  };

  const handleSearch = ({ target: input }) => {
    setSearchResults(
      courses.filter((c) =>
        formatSearchText(c.title).includes(formatSearchText(input.value))
      )
    );
  };

  const finalData = searchResults.length ? searchResults : courses;

  if (loading) return <Loading />;

  return (
    <Container>
      <Grid container alignItems="center" style={{ margin: "3em 0" }}>
        <Grid item sm={6} xs={12}>
          <Typography variant="h5">Available Courses</Typography>
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextField
            fullWidth
            variant="outlined"
            hiddenLabel
            placeholder="Search Courses..."
            onChange={handleSearch}
          />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        {finalData.map((c) => (
          <CourseCard
            key={c._id}
            _id={c._id}
            title={c.title}
            imageUri={c.imageUri}
            onEnroll={handleEnroll}
            loadingEnrollments={loadingEnrollments}
          />
        ))}
      </Grid>
      <AppSnackbar
        open={snackbar.open}
        message={snackbar.message}
        color={snackbar.color}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      />
    </Container>
  );
};

export default AllCourses
