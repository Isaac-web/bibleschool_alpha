import React, {useEffect, useState} from 'react';
import {Typography} from "@mui/material";
import _ from "lodash";
import { useSelector, useDispatch } from "react-redux";

import AdminTable from "./AdminTable";
import { fetchEnrollments } from "../../actions/Admin/enrollments";
import Loading from "../../components/Loading";

const CoursesTable = () => {
  const dispatch = useDispatch();
  const [searchResults, setSearchResults] = useState([]);
  const { data, loading } = useSelector((state) => state.adminEnrollments);

  const mapToViewModel = (data) => {
    return data.map((item) => {
      item.user.name = `${item.user.firstname} ${item.user.lastname}`;
      return item;
    });
  };

  const enrollments = mapToViewModel(data);

  const handleSearch = (results) => {
    setSearchResults(results);
  };

  useEffect(() => {
    dispatch(fetchEnrollments());
  }, []);

  const enrollmentsColumns = [
    { path: "course.title", label: "Title" },
    { path: "user.name", label: "User" },
    { path: "status", label: "Status" },
  ];

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      {" "}
      <Typography variant="h4">Enrollments</Typography>
      <AdminTable
        columns={enrollmentsColumns}
        searchProperty="course.title"
        data={enrollments}
        onSearch={handleSearch}
        searchResults={searchResults}
      />
    </>
  );
};

export default CoursesTable
