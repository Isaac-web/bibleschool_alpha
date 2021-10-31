import React from 'react';
import {Grid} from "@mui/material";


import PannelCard from '../../components/PannelCard';


const TopSummery = ({currentPannelCard, onCardClick}) => {
    const handleClick = (item) => {
        onCardClick(item)
    }


    return (
        <Grid container justifyContent="space-between" style={{marginTop: 10}}>
            <PannelCard border={currentPannelCard === "courses"} title="38" subTitle="Courses" onClick={() => handleClick("courses")}/>
            <PannelCard border={currentPannelCard === "enrollments"} title="103" subTitle="Enrollments" onClick={() => handleClick("enrollments")}/>
            <PannelCard border={currentPannelCard === "coordinators"} title="15" subTitle="Coordinators" onClick={() => handleClick("coordinators")}/>
            <PannelCard border={currentPannelCard === "admin"} title="12" subTitle="Admin" onClick={() => handleClick("admin")}/>
        </Grid>
    )
}

export default TopSummery
