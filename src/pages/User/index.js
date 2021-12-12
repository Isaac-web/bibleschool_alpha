import React, {useState, useEffect} from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  InputAdornment,
  useMediaQuery,
} from "@mui/material";
import CourseCard from "../../components/CourseCard";
import { Search } from "@mui/icons-material";
import { useTheme } from "@mui/styles";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import ConfirmationDialog from "./EnrollmentCourse/ConfirmationDialog";
import { fetchEnrollments } from "../../actions/Users/Enrollment";
import Loading from "../../components/Loading";
import { setCurrentEnrollment } from "../../actions/Users/currentEnrollment";
import {
  loadEnrollmentCourse,
  deleteEnrollment,
} from "../../actions/Users/Enrollment";

const Index = () => {
  const theme = useTheme();
  const history = useHistory();
  const dispatch = useDispatch();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const [searchResults, setSearchResults] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentEnrollmentId, setCurrentEnrollmentId] = useState("");
  const { data, loading } = useSelector((state) => state.userEnrollments);

  useEffect(() => {
    dispatch(fetchEnrollments());
  }, []);

  const mapToViewModel = (data) => {
    return data.map((item) => {
      const enrollment = {
        _id: item?._id,
        courseId: item.course._id,
        courseTitle: item.course.title,
        title: item.course.title,
        status: item.status,
        userId: item.user,
        imageUri: item.course.imageUri,
        currentModule: item.currentModule,
        coveredModules: item.coveredModules,
      };

      return enrollment;
    });
  };

  const enrollments = mapToViewModel(data);

  const handleSearch = ({ target: input }) => {
    setSearchResults(
      [...enrollments].filter((item) => item.title.includes(input.value))
    );
  };

  const redirect = (path) => {
    history.push(`/user/course/${path}`);
  };

  const handleResume = (courseId, enrollment) => {
    dispatch(setCurrentEnrollment(enrollment));
    dispatch(loadEnrollmentCourse(courseId, enrollment, redirect));
  };

  const handleDelete = () => {
    dispatch(deleteEnrollment(currentEnrollmentId, data));

    handleDialogClose();
  };

  const handleDialogOpen = (id) => {
    setCurrentEnrollmentId(id);
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
    setCurrentEnrollmentId("");
  };

  if (loading) return <Loading />;

  const finalData = searchResults.length ? searchResults : enrollments;
  return (
    <Container>
      <Grid
        container
        justifyContent="space-between"
        style={{ padding: "0 1.1em", marginBottom: "2em" }}
      >
        <Box>
          <Typography variant="h3">My Enrollments</Typography>
          <Typography
            component={Link}
            to="/courses/all"
            variant="subtitle1"
            xs={{ textDecoration: "none" }}
          >
            View More Courses
          </Typography>
        </Box>
        <TextField
          onChange={handleSearch}
          placeholder="Search..."
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Search />
              </InputAdornment>
            ),
          }}
          variant="outlined"
          style={{
            width: `${matchesSM ? "100%" : "auto"}`,
          }}
        />
      </Grid>
      {enrollments.length ? (
        <Grid container>
          {finalData.map((item) => (
            <CourseCard
              key={item._id}
              enrollmentId={item._id}
              courseId={item.courseId}
              title={item.title}
              imageUri={item.imageUri}
              onResume={(id) => handleResume(id, item)}
              onDelete={() => handleDialogOpen(item._id)}
            />
          ))}
        </Grid>
      ) : (
        <Grid container justifyContent="center" alignItems="center">
          <Grid item>
            <Typography variant="h6">No enrollments yet.</Typography>
          </Grid>
        </Grid>
      )}
      <ConfirmationDialog
        message="Are you sure you want to delete this enrollment?"
        onClose={handleDialogClose}
        open={open}
        onYes={handleDelete}
      />
    </Container>
  );
};

export default Index
