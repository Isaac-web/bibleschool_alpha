import React, {useState} from 'react';
import {Box, Typography, Container, Button, Grid} from "@mui/material";


import QuestionList from "./QuestionBoxList";
import ConfirmationDialog from "./ConfirmationDialog";

const Main = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [showQuiz, setShowQuiz] = useState(false);
    


    const handleOpenDialog = () => setOpenDialog(true);
    const handleCloseDialog = () => setOpenDialog(false);

    const handleShowQuiz = () => {
        setShowQuiz(true);
        handleCloseDialog();
    };


    return (
        <Box style={{width: "100%", height: "88vh", overflow: "auto"}}>
            <Box 
                style={{
                    background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
                    height:"30vh",
                    position: "relative" 
                }}>
                <Box style={{position: "absolute", bottom: 10, left: 10}}>
                    <Typography variant="h3" style={{color: "white"}}>Lesson 1</Typography>
                    <Typography variant="h6" style={{color: "white"}}>Current Module</Typography>
                </Box>
            </Box>

            <Container maxWidth="sm" style={{marginTop: "2em"}}>
                <Grid container justifyContent="center">
                    <Button variant="contained" style={{margin: "1em", textTransform: "none"}}>Download PDF</Button>
                    <Button  
                        variant="outlined" 
                        color="secondary" 
                        style={{margin: "1em", textTransform: "none"}} 
                        onClick={handleOpenDialog}
                        disabled={showQuiz}
                    >
                            Start Quiz
                    </Button>
                </Grid>



            {showQuiz && <Box>
                    <QuestionList/>
                    <Button variant="contained" style={{width: 100}}>Submit</Button>
                </Box>}
            </Container>
            
            <ConfirmationDialog 
                open={openDialog} 
                onClose={handleCloseDialog}
                message="Are you sure you are ready for this timed quiz?"
                onYes={handleShowQuiz}
            />
        </Box>
    )
}

export default Main
