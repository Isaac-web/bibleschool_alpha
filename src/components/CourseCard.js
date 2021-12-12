import React from 'react'
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions as CardActionsArea,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const CourseCard = ({
  title,
  imageUri,
  enrollmentId,
  courseId,
  onResume,
  onDelete,
}) => {
  const classes = useStyles();

  const raiseResume = () => {
    if (typeof onResume !== "function")
      return console.error("onResume is not a function.");
    onResume(courseId);
  };

  const raiseDelete = () => {
    if (typeof onDelete !== "function")
      return console.error("onDelete is not a function.");
    onDelete(enrollmentId);
  };

  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      style={{ padding: 20, boxSizing: "border-box" }}
    >
      <Card style={{ width: "100%" }} elevation={1}>
        <CardMedia
          image={imageUri || "none"}
          style={{
            height: "11em",
            backgroundPosition: "center",
            objectFit: "contain",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
          }}
        />
        <CardContent style={{ padding: " 0.5em 1em" }}>
          <Typography variant="h6">{title}</Typography>
        </CardContent>
        <CardActionsArea>
          <Grid container justifyContent="space-between">
            <Button
              className={classes.resumeButton}
              style={{ padding: "1em", width: "50%" }}
              onClick={() => raiseResume(enrollmentId)}
            >
              Resume
            </Button>
            <Button
              style={{ padding: "1em", width: "50%" }}
              color="secondary"
              onClick={raiseDelete}
            >
              Delete
            </Button>
          </Grid>
        </CardActionsArea>
      </Card>
    </Grid>
  );
};




const useStyles = makeStyles(theme => ({
    resumeButton: {
        textTransform: "none",
        display: "none"
    }
}))

export default CourseCard
