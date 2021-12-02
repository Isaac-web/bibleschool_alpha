import React, {useEffect, useState} from 'react';
import {Container,Typography, Grid, TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";



import {getAllCourses} from "../../actions/Users/Courses";
import CourseCard from "./CourseCard";
import formatSearchText from '../../utils/formatSearchText';
import {addEnrollment} from "../../actions/Users/Enrollment";

const AllCourses = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [searchResults, setSearchResults] = useState([]);

    const {data: courses} = useSelector(state => state.courses);
    console.log(courses);

    useEffect(() => {
        dispatch(getAllCourses());
    }, []);


    
    
    const redirect = () => history.push("/user");
    const handleEnroll = (id) => {
        dispatch(addEnrollment(id, redirect));
    }



    const handleSearch = ({target:input}) => {
        setSearchResults(courses.filter(c => formatSearchText(c.title).includes(formatSearchText(input.value))));
    }


    const finalData = searchResults.length ? searchResults : courses;
    return (
        <Container>
            <Grid container alignItems="center" style={{margin: "3em 0"}}>
                <Grid item sm={6} xs={12}><Typography variant="h5">Available Courses</Typography></Grid>
                <Grid item sm={6} xs={12}>
                    <TextField fullWidth variant="outlined" hiddenLabel placeholder="Search Courses..." onChange={handleSearch}/>
                </Grid>
            </Grid>

            <Grid container spacing={3}>
                {finalData.map(c => (
                    <CourseCard 
                        key={c._id}
                        _id={c._id} 
                        title={c.title} 
                        imageUri={c.imageUri} 
                        onEnroll={handleEnroll}
                    />
                ))}
            </Grid>
            
        </Container>
    )
}

export default AllCourses
