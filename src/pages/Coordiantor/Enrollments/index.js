import React, {useEffect, useState} from 'react';
import {InputBase, Container, Typography, Paper, InputAdornment, IconButton} from "@mui/material";
import {Search, MoreVert} from "@mui/icons-material";
import {useSelector, useDispatch} from "react-redux";


import EnrollmentsTable from "./EnrollmentTable";
import formatSearchText from "../../../utils/formatSearchText";
import AppMenu from "../../../components/AppMenu";
import Loading from "../../../components/Loading";
import {fetchEnrollments} from "../../../actions/Coordinator/enrollment";






const enrollmentsData = [
    {_id: "_enrollment_1", name: "New Course 1", progress: "10%", status: "in progress"},
    {_id: "_enrollment_2", name: "New Course 2", progress: "20%", status: "complete"},
    {_id: "_enrollment_3", name: "New Course 3", progress: "30%", status: "in progress"},
    {_id: "_enrollment_4", name: "New Course 4", progress: "40%", status: "complete"},
    {_id: "_enrollment_5", name: "New Course 5", progress: "50%", status: "in progress"},
    {_id: "_enrollment_6", name: "New Course 5", progress: "50%", status: "complete"},
    {_id: "_enrollment_7", name: "New Course 6", progress: "50%", status: "complete"},
    {_id: "_enrollment_8", name: "New Course 7", progress: "50%", status: "complete"},
    {_id: "_enrollment_9", name: "New Course 8", progress: "50%", status: "inprogress"},
]



const menu = [
    {value: "", label: "All"},
    {value: "complete", label: "Complete"},
    {value: "in progress", label: "In Progress"},
]

const columns = [
    {path: "name", label: "Name"},
    {path: "progress", label: "Progress"},
    {path: "status", label: "Status"},
]


const Index = () => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [searchResults, setSearchResults] = useState([]);
    const [filterProperty, setFilterProperty] = useState("");


    const { data: enrollments, loading } = useSelector(state => state.coordinatorEnrollments);
    




    const handleOpen = (e) => {
        setAnchorEl(e.target);
        setOpen(true);
    }
    
    const handleClose = () => {
        setOpen(false);
        setAnchorEl(null);

    }


    const handleChange = ({target:input}) => {
        const data = [...enrollmentsData];
        const results = data.filter(item => formatSearchText(item.name).includes(formatSearchText(input.value)));
        setSearchResults(results);
    }


    const handleFilter = (filterProp) => {
        setFilterProperty(filterProp);
    }



    let filtered = enrollments.filter(item => formatSearchText(item.status) === formatSearchText(filterProperty));
    filtered = filtered.length ? filtered : enrollmentsData


    useEffect(() => {
        dispatch(fetchEnrollments());
    }, [])


    if(loading) return <Loading/>


    return (
        <Container maxWidth="xl">
            <Typography variant="h4">Enrollments</Typography>
            <InputBase 
                style={{
                        background: "rgba(0, 0, 0, 0.1)", 
                        padding: 7, 
                        borderRadius: 10,

                    }} 
                onChange={handleChange}
                component={Paper} 
                placeholder="Search" 
                fullWidth 
                startAdornment={<InputAdornment><Search/></InputAdornment>}
                endAdornment={<InputAdornment>
                                <IconButton onClick={handleOpen}>
                                    <MoreVert/>
                                </IconButton>
                            </InputAdornment>}
            />
            <EnrollmentsTable
                columns={columns}
                data={searchResults.length ? searchResults : filtered}
                searchProperty="name"
            />

            <AppMenu 
                anchorEl={anchorEl}
                menu={menu} 
                open={open}
                onClose={handleClose}
                onItemClick={item => handleFilter(item)}

            />
        </Container>
    )
}

export default Index
