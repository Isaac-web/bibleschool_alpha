import React, {useEffect, useState} from 'react';
import {Button, Dialog, DialogTitle, DialogContent, DialogActions, Typography} from "@mui/material";
import {useSelector, useDispatch} from 'react-redux';
import {courses as courseActions} from "../../actions/Admin";

import AdminTable from "./AdminTable";
import Loading from "../../components/Loading";


const CoursesTable = () => {
    const {data: courses, loading} = useSelector(state => state.adminCourses);

    const dispatch = useDispatch();
    const [searchResults, setSearchResults] = useState(([]));


    const handleSearch = (results) => {
        setSearchResults(results);
    }


    useEffect(() => {
        dispatch(courseActions.fetchCourses());
    }, []);

    const courseTableColumns = [
        {path: "title", label: "Title"}, 
        {path: "coordinator", label: "Coordinator"}, 
        {path: "enrollments", label: "Enrollments"}, 
    ]

    if(loading) return <Loading/>
    return (
        <>
            <Typography variant="h4">Courses</Typography>
            <AdminTable 
                columns={courseTableColumns} 
                searchProperty="title" 
                data={courses} 
                onSearch={handleSearch} 
                searchResults={searchResults}
            />
        </>
    )
}

export default CoursesTable
