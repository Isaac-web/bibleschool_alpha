import React from 'react';
import {Box, Typography} from "@mui/material"
import {useSelector, useDispatch} from "react-redux";

import QuestionBoxItem from "./QuestionBoxItem"
import {deleteQuestion} from "../../../actions/Coordinator/currentModule";


const QuestionBoxList = () => {
    const dispatch = useDispatch();
    const { questions, _id: moduleId } = useSelector(
      (state) => state.currentModule.data
    );

    const handleDelete = (question) => {
      console.log(question._id);
      const clonedQuestions = [...questions];
      const index = clonedQuestions.findIndex(
        (i) => i.question === question.question
      );

      clonedQuestions.splice(index, 1);
      dispatch(deleteQuestion(moduleId, question._id, clonedQuestions));
    };

    return questions?.length ? (
      questions?.map((q, index) => (
        <QuestionBoxItem
          key={q._id}
          questionObject={q}
          onDelete={handleDelete}
        />
      ))
    ) : (
      <Box style={{ margin: "2em" }}>
        <Typography variant="h4" align="center">
          No Questions Yet.
        </Typography>
        <Typography variant="subtitle1" align="center">
          Click the button below to add a new question.
        </Typography>
      </Box>
    );
}

export default QuestionBoxList