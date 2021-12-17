import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import PannelCard from "../../components/PannelCard";
import { getAdminSummery } from "../../actions/Admin/summery";

const TopSummery = ({ currentPannelCard, onCardClick }) => {
  const dispatch = useDispatch();
  const adminSummery = useSelector((state) => state.adminSummery);
  useEffect(() => {
    dispatch(getAdminSummery());
  }, []);

  const handleClick = (item) => {
    onCardClick(item);
  };

  return (
    <Grid container justifyContent="space-between" style={{ marginTop: 10 }}>
      <PannelCard
        border={currentPannelCard === "courses"}
        title={adminSummery.coursesCount}
        subTitle="Courses"
        onClick={() => handleClick("courses")}
      />
      <PannelCard
        border={currentPannelCard === "enrollments"}
        title={adminSummery.enrollmentsCount}
        subTitle="Enrollments"
        onClick={() => handleClick("enrollments")}
      />
      <PannelCard
        border={currentPannelCard === "coordinators"}
        title={adminSummery.coordinatorsCount}
        subTitle="Coordinators"
        onClick={() => handleClick("coordinators")}
      />
      <PannelCard
        border={currentPannelCard === "admin"}
        title={adminSummery.adminsCount}
        subTitle="Admins"
        onClick={() => handleClick("admin")}
      />
    </Grid>
  );
};

export default TopSummery;
