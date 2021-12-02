import React, {useState, useEffect} from 'react';
import {Box, Button, Container, Grid, IconButton, Typography, useMediaQuery} from "@mui/material"
import {makeStyles, useTheme} from '@mui/styles';
import {PostAdd, Save} from "@mui/icons-material"
import {useSelector, useDispatch} from "react-redux";

import FileDropZone from "../../../components/FileDropZone";
import QuestionDialog from "./Questiondialog";
import QuestionBoxList from './QuestionBoxList';
import {addQuestion, saveChanges, supplyFile} from "../../../actions/Coordinator/currentModule";
import AppSnackbar from "../../../components/AppSnackbar";
import FileListItem from "../../../components/List/FileListItem";
import Empty from "../../../components/Empty";




const Index = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const theme = useTheme();
    const {data:currentModule} = useSelector(state => state.currentModule);
    const [openQuestionDialog, setOpenQuestionDialog] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [snackbar, setSnackbar] = useState({open: false, message: "", color: ""});
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));




    const handleOpenQuestionDialog = () => {
        setOpenQuestionDialog(true);
    }

    const handleCloseQuestionDialog = () => {
        setOpenQuestionDialog(false);
    }


    const handleAddQuestion = (newQuestion) => {
            dispatch(addQuestion(newQuestion))
    }


    const notify = (message, color) => {
        setSnackbar({...snackbar, open: true, message, color})
    }


    const handleSaveChanges = () => {
        if(!currentModule.file) return notify("Please supply a file to this module.");
        let answersValid = true;
        currentModule.questions.forEach(q => {
            if(typeof q.ans !== "string" || !q.ans.trim().length){
                answersValid = false;
                return;
            }
        });

        if(!answersValid) return notify("Some questions dont have answers.");
        dispatch(saveChanges(currentModule, notify));
    }


    const handleFileChange = (file) => {
        dispatch(supplyFile(file));
    }


    useEffect(() => {
        console.log("Getting data for module: ", currentModule._id);
    }, [currentModule._id]);


    return (
        <>
        <AppSnackbar
            open={snackbar.open}
            onClose={() => setSnackbar({...snackbar, open: false})}
            message={snackbar.message}
            color={snackbar.color}
        />
        <Box className={classes.main} style={{flex: matchesSM && 1}}>
        { !currentModule?._id ? 
            <Empty title="No Module Selected"/> :
            
            <Box style={{overflow: "auto", height: "100%"}}>
                <Box>
                    <Box className={classes.topBanner}>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <IconButton onClick={handleSaveChanges} style={{color: "white"}}><Save/></IconButton>
                            </Grid>
                        </Grid>
                        <Grid container direction="column" justifyContent="flex-end" className={classes.topBannerTextContainer}>
                            <Typography variant="h4">{currentModule.title}</Typography>
                            <Typography variant="h6">{currentModule.subtitle}</Typography>
                        </Grid>
                    </Box>
                    <QuestionDialog open={openQuestionDialog} onClose={handleCloseQuestionDialog} onNewQuestion={handleAddQuestion}/>
                    <Container maxWidth="sm" className={classes.container}>
                        <FileDropZone fullWidth onChange={handleFileChange}/>
                        {currentModule.file && <FileListItem title={currentModule.file.name}/>}
                        <QuestionBoxList questions={questions}/>
                        
                        <Button 
                            onClick={handleOpenQuestionDialog} 
                            fullWidth variant="outlined" 
                            startIcon={<PostAdd/>}
                            style={{margin: "2em 0", textTransform: "none"}}
                        >
                            {questions.length ? "New Question" : "Add Questions"}
                        </Button>                        
                    </Container>
                </Box>
                
            </Box>
        }
        </Box>
        </>
    )
}


const useStyles = makeStyles(theme => ({
    addQuestionsButton: {
        margin: "10em 0"
    },
    container: {
        marginTop: "1em"
    },
    main: {
        flex: 0.70,
        overflow: "hidden", 
        height: "88vh"
    }, 
    topBanner: {
        background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))", 
        color: "white",
        padding: "1em"
    }, 
    topBannerTextContainer: {
        height: "10em"
    }
}));


export default Index
