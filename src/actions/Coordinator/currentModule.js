import { colors } from "../../config"

export const setCurrentModule = (module) => async dispatch => {
    console.log(module)
    dispatch({type: "CURRENT_MODULE_SET", payload: module})
}


export const clearCurrentModule = () => async dispatch => {
    dispatch({type: "CURRENT_MODULE_CLEARED"})
}


export const supplyFile = (files) => async dispatch =>  {
    console.log(files[0]);
    dispatch({type: "FILE_SUPPLIED", payload: files[0]});
}

export const addQuestion = (newQuestion) => async dispatch =>  {
    dispatch({type: "QUESTION_ADDED", payload: newQuestion});
}

export const updateQuestion = (questions) => async dispatch =>  {
    dispatch({type: "QUESTION_UPDATED", payload: questions});
}

export const deleteQuestion = (remainingQuestions) => async dispatch =>  {
    dispatch({type: "QUESTION_DELETED", payload: remainingQuestions});
}


export const saveChanges = (currentModule, notify) => async dispatch =>  {
    dispatch({type: "CHANGES_SAVED", payload: currentModule});
    notify("Changes saved.", colors.success)
}