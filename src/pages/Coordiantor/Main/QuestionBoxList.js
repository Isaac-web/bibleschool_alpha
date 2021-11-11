import React from 'react';
import {Box, Typography} from "@mui/material"
import {useSelector, useDispatch} from "react-redux";

import QuestionBoxItem from "./QuestionBoxItem"
import {deleteQuestion} from "../../../actions/Coordinator/currentModule";


const QuestionBoxList = () => {
    const dispatch = useDispatch();
    const questions =  useSelector(state => state.currentModule.data.questions);

    const handleDelete = (item) => {
        const clonedQuestions = [...questions];
        const index = clonedQuestions.findIndex(i => i.question === item.question);
        
        clonedQuestions.splice(index, 1);
        dispatch(deleteQuestion(clonedQuestions));
    }


    


    return (
        questions?.length ? 
            questions?.map((q, index) => <QuestionBoxItem key={q.question+index} questionObject={q} onDelete={handleDelete}/>) : 
            <Box style={{margin: "2em"}}>
                <Typography  variant="h4" align="center">No Questions Yet.</Typography>
                <Typography variant="subtitle1" align="center">Click the button below to add a new question.</Typography>
            </Box>
    )
}

export default QuestionBoxList