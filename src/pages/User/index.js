import React, {useState, useEffect} from 'react';
import {Box, Container, Grid, Typography,TextField, InputAdornment} from "@mui/material";
import CourseCard from '../../components/CourseCard';
import { Search } from '@mui/icons-material';
import {Link, useHistory} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';


import ConfirmationDialog from "./EnrollmentCourse/ConfirmationDialog";
import {fetchEnrollments} from "../../actions/Users/Enrollment";
import Loading from "../../components/Loading";
import {loadEnrollmentCourse} from "../../actions/Users/Enrollment";


const Index = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [searchResults, setSearchResults] = useState([]);
    const [open, setOpen] = useState(false);
    const [currentEnrollmentId, setCurrentEnrollmentId] = useState("");


    useEffect(() => {
        dispatch(fetchEnrollments());
    }, []);

    const {data:enrollments, loading} = useSelector(state => state.userEnrollments);

    
    

    const handleSearch = ({target:input}) => {
        setSearchResults([...enrollments].filter(item => item.title.includes(input.value)));
    }

    const redirect = (id) => {
        history.push(`/user/enrollment/${id}`);
    }
    const handleResume = (id) => {
        dispatch(loadEnrollmentCourse(id, redirect));
    }


    const handleDelete = (enrollmentId) => {
        //dipatch delete actoin ...

        
        handleDialogClose();
    }

    const handleDialogOpen = (id) => {
        setCurrentEnrollmentId(id)
        setOpen(true);
    };
    const handleDialogClose = () => {
        setOpen(false);
        setCurrentEnrollmentId("");
    };



    if(loading) return <Loading/>


    const finalData = searchResults.length ? searchResults : enrollments;
    return (
        <Container>
            <Grid container justifyContent="space-between" style={{padding: "0 1.1em", marginBottom: "2em"}}>
                <Box>
                    <Typography variant="h3">My Enrollments</Typography>
                    <Typography component={Link} to="/courses/all" variant="subtitle1" xs={{textDecoration: "none"}}>View More Courses</Typography>
                </Box>
                <TextField 
                    onChange={handleSearch}
                    placeholder="Search..." 
                    InputProps={{endAdornment: <InputAdornment><Search/></InputAdornment>}}
                    variant="outlined" 
                />
            </Grid>
            <Grid container>
                {finalData.map(item => 
                    <CourseCard 
                        enrollmentId={item._id} 
                        title={item.title} 
                        imageUri={item.imageUri}
                        onResume={handleResume}
                        onDelete={() => handleDialogOpen(item._id)}
                    />)}
            </Grid>
            <ConfirmationDialog
                message="Are you sure you want to delete this enrollment?"
                onClose={handleDialogClose}
                open={open}
                onYes={handleDelete}
            />
        </Container>
    )
}

export default Index
