import React, {useEffect, useState} from 'react';
import {Typography} from "@mui/material";
import {useSelector, useDispatch} from 'react-redux';

import AdminTable from "./AdminTable";
import {fetchEnrollments} from "../../actions/Admin/enrollments";


const CoursesTable = () => {
    const dispatch = useDispatch();
    const [searchResults, setSearchResults] = useState(([]));
    const {data: enrollments, loading} = useSelector(state => state.adminEnrollments);


    const handleSearch = (results) => {
        setSearchResults(results);
    }

    
    useEffect(() => {
        dispatch(fetchEnrollments())
    }, []);


    

    const enrollmentsColumns = [
        {path: "title", label: "Title"}, 
        {path: "coordinator", label: "Coordinator"}, 
        {path: "enrollments", label: "Enrollments"}, 
    ]

    if(loading) {
        return <h1>Loading</h1>
    }
    return (
        <>  <Typography variant="h4">Enrollments</Typography>
            <AdminTable 
                columns={enrollmentsColumns} 
                searchProperty="title" 
                data={enrollments} 
                onSearch={handleSearch} 
                searchResults={searchResults}
            />
        </>
    )
}

export default CoursesTable
