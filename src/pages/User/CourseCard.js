import React, {useState} from 'react';
import {Button, Card, CardMedia, CardContent, CardActions, Typography, Grid, CircularProgress} from "@mui/material";

const CourseCard = ({title, imageUri, onEnroll, _id}) => {
    const [showProgress, setShowProgress] = useState(false);

    const raiseEnroll = () => {
        onEnroll(_id);
        setShowProgress(true);
    }
    
    return (
        <Grid item xs={12} sm={4} lg={3}>
        <Card>
            <CardMedia image={imageUri} style={{height: "10em", background: "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5))"}}/>
            <CardContent>
                <Typography variant="h6">{title}</Typography>
            </CardContent>
            <CardActions>
                <Button onClick={raiseEnroll}>
                    {showProgress && <CircularProgress size={12} style={{margin: 5}}/>}
                    Enroll Now
                </Button>
            </CardActions>
        </Card>
    </Grid>
    )
}

export default CourseCard
