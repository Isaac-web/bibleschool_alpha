import React, { useState, useEffect } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  TextField,
  Hidden,
  SwipeableDrawer,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import { useTheme } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
  getCourseModules,
  getEnrollmentCourse,
} from "../../../actions/Users/Enrollment";
import { clearQuiz } from "../../../actions/Users/quiz";
import * as enrollmentService from "../../../services/enrollmentService";

const Sidebar = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { courseId } = useParams();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const [searchResults, setSearchResult] = useState([]);
  const [openDrawer, setOpenDrawer] = useState(false);
  const {
    data: { modules },
    loading,
  } = useSelector((state) => state.modules);
  const { data: currentModule } = useSelector((state) => state.currentModule);
  const enrollment = enrollmentService.getEnrollment();

  useEffect(() => {
    dispatch(getCourseModules(courseId));
  }, []);

  const handleSearch = ({ target: input }) => {
    setSearchResult([
      ...modules.filter((item) => item.title.includes(input.value)),
    ]);
  };

  const handleOpenDrawer = () => setOpenDrawer(true);
  const handleCloseDrawer = () => setOpenDrawer(false);

  const handleModuleSelect = (moduleId) => {
    dispatch(getEnrollmentCourse(moduleId));
    dispatch(clearQuiz());
    handleCloseDrawer();
  };

  const finalData = searchResults.length ? searchResults : modules;

  const readyUi = (
    <Box style={{ width: "100%" }}>
      <Box style={{ margin: "0 0.5em", marginBottom: 10 }}>
        <Typography variant="h5" style={{ marginBottom: 10 }}>
          {enrollment.courseTitle}
        </Typography>
        <TextField
          variant="outlined"
          placeholder="Search..."
          fullWidth
          onChange={handleSearch}
        />
      </Box>
      <Box className={{ overflow: "hidden" }}>
        <ModuleList
          data={finalData}
          currentItemId={currentModule._id || enrollment.currentModule}
          onSetCurrentItemId={handleModuleSelect}
        />
      </Box>
    </Box>
  );
  return !matchesSM ? (
    <Hidden smDown>{readyUi}</Hidden>
  ) : (
    <>
      <Hidden mdUp>
        <IconButton
          onClick={handleOpenDrawer}
          style={{ position: "fixed", top: 60, right: 10 }}
        >
          <Menu />
        </IconButton>
      </Hidden>
      <SwipeableDrawer
        open={openDrawer}
        onClose={handleCloseDrawer}
        onOpen={handleOpenDrawer}
        anchor="right"
        style={{ paddingTop: 30 }}
      >
        {readyUi}
      </SwipeableDrawer>
    </>
  );
};

const ModuleList = ({ data, currentItemId, onSetCurrentItemId }) => {
  if (!data?.length) return null;

  return (
    <Box style={{ height: "75vh", overflow: "auto", margin: "0 10px" }}>
      <List>
        {data.map((item) => {
          return (
            <ListItem
              key={item._id}
              style={{
                cursor: "pointer",
                backgroundColor:
                  currentItemId === item._id ? "rgba(0, 0, 0, 0.05)" : "white",
              }}
              button
              onClick={() => onSetCurrentItemId(item._id)}
            >
              <ListItemText primary={item.title} secondary={item.subtitle} />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default Sidebar;
