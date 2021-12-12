import { colors } from "../../config"
import { CURRENT_MODULE_SET, CURRENT_MODULE_CLEARED, FILE_SUPPLIED, QUESTION_ADDED, 
    QUESTION_DELETED, QUESTION_UPDATED, CHANGES_SAVED } from "../../config/reduxContants";

import * as api from "../../api/index";

export const setCurrentModule = (module) => async (dispatch) => {
  dispatch({ type: "MODULE_LOADING_STARTED" });
  dispatch({ type: "FILE_CLEARED" });
  dispatch({ type: "FILE_URI_CLEARED" });
  const { data } = await api.getCurrentModule(module._id);
  dispatch({ type: CURRENT_MODULE_SET, payload: data });
  dispatch({ type: "MODULE_LOADING_STOPPED" });
};

export const clearCurrentModule = () => async (dispatch) => {
  dispatch({ type: CURRENT_MODULE_CLEARED });
};

export const supplyFile = (files) => async (dispatch) => {
  dispatch({ type: FILE_SUPPLIED, payload: files[0] });
};

export const saveFile = (moduleId, file) => async (dispatch) => {
  console.log("Loading Started...");
  const formData = new FormData();
  formData.append("fileUpload", file);
  console.log("Loading Stopped...");

  const { data } = await api.saveFile(moduleId, formData);
  dispatch({ type: "FILE_URI_SET", payload: data.fileUri });
  dispatch({ type: "FILE_CLEARED" });
};

export const addQuestion = (newQuestion) => async (dispatch) => {
  dispatch({ type: QUESTION_ADDED, payload: newQuestion });
};

export const updateQuestion = (questions) => async (dispatch) => {
  dispatch({ type: QUESTION_UPDATED, payload: questions });
};

export const deleteQuestion =
  (moduleId, questionId, remainingQuestions) => async (dispatch) => {
    try {
      dispatch({ type: QUESTION_DELETED, payload: remainingQuestions });
      await api.deleteModuleQuestion(moduleId, questionId);
    } catch (ex) {
      if (ex.response.data) return console.log(ex.response.data);

      console.log(ex);
    }
  };

export const saveChanges = (id, currentModule, notify) => async (dispatch) => {
  try {
    notify("Updating module...");
    await api.updateModule(id, currentModule);
    dispatch({ type: CHANGES_SAVED, payload: currentModule });
    notify("Changes saved.", colors.success);
  } catch (ex) {
    notify(ex?.response?.data);
  }
};