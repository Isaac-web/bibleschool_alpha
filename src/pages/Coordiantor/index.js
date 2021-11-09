import React from 'react';
import {Box, Container} from "@mui/material"


import Sidebar from './Sidebar'
import Main from './Main'



const Index = () => {
    return (
        <Container maxWidth="xl" style={{display: "flex"}}>
            <Main/>
            <Sidebar/>
        </Container>
    )
}




export default Index
