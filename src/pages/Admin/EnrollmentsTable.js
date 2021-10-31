import React, {useEffect, useState} from 'react';
import {Typography} from "@mui/material";
import {useSelector} from 'react-redux';

import AdminTable from "./AdminTable";


const CoursesTable = () => {
    const [searchResults, setSearchResults] = useState(([]));
    const {data: courses} = useSelector(state => state.adminCourses);


    const handleSearch = (results) => {
        setSearchResults(results);
    }

    const courseTableColumns = [
        {path: "title", label: "Title"}, 
        {path: "coordinator", label: "Coordinator"}, 
        {path: "enrollments", label: "Enrollments"}, 
    ]
    return (
        <>  <Typography variant="h4">Enrollments</Typography>
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
