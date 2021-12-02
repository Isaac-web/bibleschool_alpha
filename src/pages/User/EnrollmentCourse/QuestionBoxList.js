import React from 'react';
import {Box, Typography} from "@mui/material"
import {useSelector} from "react-redux";

import QuestionBoxItem from "./QuestionBoxItem"


const QuestionBoxList = () => {
    const questions = [
        {question: "This is a question.", objectives: ["ans1", "ans2", "ans3", "ans4"], ans: ""},
        {question: "This is a question.", objectives: ["ans1", "ans2", "ans3", "ans4"], ans: ""},
        {question: "This is a question.", objectives: ["ans1", "ans2", "ans3", "ans4"], ans: ""},
        {question: "This is a question.", objectives: ["ans1", "ans2", "ans3", "ans4"], ans: ""},
    ]


    return questions?.length ? 
            questions?.map((q, index) => <QuestionBoxItem key={q.question+index} questionObject={q}/>) : null
}

export default QuestionBoxList