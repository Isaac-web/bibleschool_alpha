import React, { useState, useEffect } from "react";
import { Box, Container, useTheme, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import useStyles from "./styles";
import TopSummery from "./TopSummery";
import Sidebar from "./Sidebar";
import AdminList from "./AdminsList";
import CoordinatorList from "./CoordinatorList";
import CoursesTable from "./CoursesTable";
import EnrollmentsTable from "./EnrollmentsTable";
import AppDrawer from "../../components/AppDrawer";

const Index = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [currentData, setCurrentData] = useState("courses");
  const [openDrawer, setOpenDrawer] = useState(false);
  const coordiantors = useSelector((state) => state.adminCoordinators);
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const handleCardClick = (item) => {
    setCurrentData(item);
  };

  const handleOpenDrawer = () => {
    setOpenDrawer(true);
  };

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };

  const DataComponent = () => {
    if (currentData === "courses") return <CoursesTable />;
    else if (currentData === "enrollments") return <EnrollmentsTable />;
    else if (currentData === "coordinators")
      return <CoordinatorList data={coordiantors} />;
    else if (currentData === "admin") return <AdminList data={coordiantors} />;
  };

  return (
    <Container maxWidth="xl">
      <Box className={classes.container}>
        <Box className={classes.main} style={{ flex: matchesSM && 1 }}>
          <TopSummery
            currentPannelCard={currentData}
            onCardClick={handleCardClick}
          />
          <DataComponent />
        </Box>
        {!matchesSM && (
          <Box className={classes.sidebar}>
            <Sidebar />
          </Box>
        )}
        {matchesSM && (
          <AppDrawer
            open={openDrawer}
            onClose={handleCloseDrawer}
            onOpen={handleOpenDrawer}
          >
            <Sidebar />
          </AppDrawer>
        )}
      </Box>
    </Container>
  );
};

export default Index;
