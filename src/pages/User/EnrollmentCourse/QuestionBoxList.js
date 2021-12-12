import React from 'react';
import {Box, Typography} from "@mui/material"
import {useSelector} from "react-redux";

import QuestionBoxItem from "./QuestionBoxItem"


const QuestionBoxList = ({ questions }) => {
  return questions?.length ? (
    questions?.map((q, index) => (
      <QuestionBoxItem key={q._id || q.question + index} questionObject={q} />
    ))
  ) : (
    <Typography variant="body1" align="center">
      Sorry, no questions for this module.
    </Typography>
  );
};

export default QuestionBoxList