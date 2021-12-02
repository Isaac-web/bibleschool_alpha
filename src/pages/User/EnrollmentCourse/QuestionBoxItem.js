import React, {useState} from 'react';
import {Box, FormControlLabel, Typography, Radio, RadioGroup, IconButton} from "@mui/material"
import {makeStyles} from "@mui/styles";
import {useSelector, useDispatch} from "react-redux";

const QuestionBoxItem = ({questionObject=null, onDelete}) => {
    const classes = useStyles();
    const questions = useSelector(state => state.currentModule.data.questions);

    const handleRadioChange = (ans, questionObject) => {
       const clonedQuestions = [...questions];
       const index = questions.findIndex(q => q.question === questionObject.question);
       if(index === -1) return;

       clonedQuestions[index] = {...clonedQuestions[index]}
       clonedQuestions[index].ans = ans;
       

       console.log(ans, questionObject)
    }


    return (
        <Box className={classes.container}>
            <Box className={classes.questionContainer}>
                <Typography variant="body1">{questionObject.question}</Typography>
            </Box>
            <RadioGroup onChange={({target:input}) => handleRadioChange(input.value, questionObject)} value={questionObject.ans}>
                {questionObject?.objectives?.map(item => 
                    <FormControlLabel value={item} label={item} control={<Radio/>}/>)}
            </RadioGroup>
        </Box>
                    
    )
}


const useStyles = makeStyles(theme => ({
    container: {
        padding: 10, 
        borderRadius: 10, 
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", 
        margin: "10px 0", 
        position: "relative"
    }, 
    questionContainer: {
        backgroundColor: "rgba(0, 0, 0, 0.03)", 
        borderRadius: 10, 
        padding: "12px 10px"
    }
}))



export default QuestionBoxItem;
