import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Container,
  Button,
  Grid,
  CircularProgress,
} from "@mui/material";
import { SettingsBackupRestore, Replay } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import CountDown from "react-countdown";
import { useParams } from "react-router-dom";

import QuestionList from "./QuestionBoxList";
import ConfirmationDialog from "./ConfirmationDialog";
import * as enrollmentService from "../../../services/enrollmentService";
import { markQuiz } from "../../../actions/Users/quiz";
import {
  getEnrollmentCourse,
  downloadModule,
} from "../../../actions/Users/Enrollment";
import Loading from "../../../components/Loading";
import quiz from "../../../reducers/Users/quiz";

const Main = () => {
  const dispatch = useDispatch();
  const { enrollmentId } = useParams();
  const [openDialog, setOpenDialog] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizSubumitCount, setQuizSubmitCount] = useState(0);
  const [timer, setTimer] = useState(null);

  const { data: currentModule, loading: currentModuleLoading } = useSelector(
    (state) => state.currentModule
  );
  const currentEnrollment = enrollmentService.getEnrollment();

  const { data: quiz, loading: quizLoad } = useSelector((state) => state.quiz);

  useEffect(() => {
    dispatch(getEnrollmentCourse(currentEnrollment.currentModule));
  }, []);

  useEffect(() => {
    setShowQuiz(false);
    currentModule.questions = formatModuleQuestions(currentModule.questions);
  }, [currentModule._id, quizSubumitCount]);

  useEffect(() => {
    setTimer(Date.now() + 1000 * 60);
  }, [showQuiz]);

  const loadCurrentModule = () => {
    dispatch(getEnrollmentCourse(currentEnrollment.currentModule));
  };

  const handleOpenDialog = () => setOpenDialog(true);
  const handleCloseDialog = () => setOpenDialog(false);

  const handleShowQuiz = () => {
    setShowQuiz(true);
    handleCloseDialog();
  };

  const handleSubmitQuiz = () => {
    const data = {
      enrollmentId: enrollmentId,
      moduleId: currentModule._id,
      questions: currentModule.questions,
    };

    dispatch(markQuiz(data));
  };

  const formatModuleQuestions = (questions) => {
    console.log("Function called.");
    return questions.map((q) => {
      if (!q) return;
      if (q.ans) q.ans = "";
      return q;
    });
  };

  const handleDownloadModule = () => {
    dispatch(downloadModule(currentModule.fileUri));
  };

  const storedEnrollment = enrollmentService.getEnrollment();
  const coveredModules = storedEnrollment.coveredModules;
  const currentModuleCovered =
    coveredModules.indexOf(currentModule._id) > -1 ||
    currentModule._id === storedEnrollment.currentModule
      ? true
      : false;

  if (currentModuleLoading) return <Loading />;

  if (!currentModuleCovered)
    return (
      <Grid
        container
        style={{ height: "80vh" }}
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <Grid item>
          <Typography variant="h6">
            Please complete preceeding modules
          </Typography>
        </Grid>
        <Grid item>
          <Button
            onClick={loadCurrentModule}
            variant="outlined"
            style={{ textTransform: "none" }}
            endIcon={<SettingsBackupRestore />}
          >
            Back to Current Module
          </Button>
        </Grid>
      </Grid>
    );

  const takeQuiz =
    currentEnrollment.coveredModules.indexOf(currentModule._id) > -1
      ? true
      : false;

  const renderQuiz = showQuiz && !quiz.score && quiz.score === undefined;

  return (
    <Box style={{ width: "100%", height: "88vh", overflow: "auto" }}>
      <Box
        style={{
          background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
          height: "30vh",
          position: "relative",
        }}
      >
        <Box style={{ position: "absolute", bottom: 10, left: 10 }}>
          <Typography variant="h3" style={{ color: "white" }}>
            {currentModule.title}
          </Typography>
          <Typography variant="h6" style={{ color: "white" }}>
            {currentModule.subtitle}
          </Typography>
        </Box>
      </Box>

      <Container maxWidth="sm" style={{ marginTop: "2em" }}>
        <Grid container justifyContent="center">
          <Button
            onClick={handleDownloadModule}
            variant="contained"
            style={{ margin: "1em", textTransform: "none" }}
          >
            Download PDF
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            style={{ margin: "1em", textTransform: "none" }}
            onClick={handleOpenDialog}
            disabled={takeQuiz || showQuiz}
          >
            Start Quiz
          </Button>
        </Grid>

        {renderQuiz && (
          <Box style={{ display: "flex", flexDirection: "column" }}>
            {currentModule.questions.length ? (
              <CountDown
                date={timer}
                renderer={RenderTimer}
                onComplete={handleSubmitQuiz}
              />
            ) : null}

            <QuestionList questions={currentModule.questions} />
            {currentModule.questions.length ? (
              <Button
                variant="contained"
                style={{ width: 100 }}
                onClick={handleSubmitQuiz}
                startIcon={
                  quizLoad ? (
                    <CircularProgress size={10} style={{ color: "white" }} />
                  ) : null
                }
              >
                Submit
              </Button>
            ) : null}
          </Box>
        )}
      </Container>

      <ResultsComponent score={quiz.score} wrongAnswers={quiz.wrongAnswers} />

      <ConfirmationDialog
        open={openDialog}
        onClose={handleCloseDialog}
        message="Are you sure you are ready for this timed quiz?"
        onYes={handleShowQuiz}
      />
    </Box>
  );
};

const WrongAnswerBox = ({ data }) => {
  if (!data || data.length < 1) return null;
  return data.map((item) => (
    <Box
      key={`${item.question}_${item.ans}`}
      style={{
        padding: "12px 8px",
        marginBottom: "2em",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        borderRadius: 6,
      }}
    >
      <Typography
        style={{
          padding: 10,
          marginBottom: 5,
          backgroundColor: "rgba(0, 0, 0, 0.05)",
          borderRadius: 6,
        }}
        variant="body1"
      >
        {item.question}
      </Typography>
      <Typography
        style={{
          padding: 10,
          backgroundColor: "rgba(0, 255, 0, 0.05)",
          borderRadius: 10,
        }}
        variant="subtitle1"
      >
        {item.ans}
      </Typography>
    </Box>
  ));
};

const ResultsComponent = ({ score, wrongAnswers }) => {
  const dispatch = useDispatch();
  const currentEnrollment = enrollmentService.getEnrollment();

  const handleContinue = () => {
    dispatch(getEnrollmentCourse(currentEnrollment.currentModule));
  };

  const handleRetry = () => {
    dispatch(getEnrollmentCourse(currentEnrollment.currentModule));
  };

  return (
    <Container maxWidth="sm" style={{ margin: "2em 0" }}>
      <Typography variant="h5" align="center">
        {score ? `Score ${Math.round(score * 100)}%` : ""}
      </Typography>
      <Typography variant="h6" align="center">
        {Math.round(score) < 0.7 && "Failed to meet minimum requirements"}
      </Typography>

      {/* <WrongAnswerBox data={wrongAnswers} /> */}

      <Grid item>
        {score > 0.7 ? (
          <Button variant="contained" onClick={handleContinue}>
            Continue
          </Button>
        ) : (
          score !== undefined && (
            <Button
              variant="outlined"
              startIcon={<Replay />}
              onClick={handleRetry}
            >
              Retry
            </Button>
          )
        )}
      </Grid>
    </Container>
  );
};

const RenderTimer = ({ hours, minutes, seconds }) => {
  return (
    <Typography variant="h4" align="right">
      {hours}:{minutes}:{seconds}
    </Typography>
  );
};

export default Main;
