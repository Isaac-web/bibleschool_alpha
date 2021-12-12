import {colors} from "../../config";
import {LOADING_STARTED, LOADING_STOPPED} from "../../config/reduxContants";
import {clearCurrentModule, setCurrentModule} from "../Coordinator/currentModule";
import * as api from "../../api";
import * as authService from "../../services/userServices";

// const user = authService.getCurrentUser();
export const fetchModules = () => async (dispatch) => {
  const user = authService.getCurrentUser();
  dispatch({ type: LOADING_STARTED });
  const { data } = await api.getCoordinatorModules(user.courseId);
  dispatch({ type: "COURSE_SET" });
  dispatch({ type: "MODULES_FETCHED", payload: data.modules });
  dispatch({ type: LOADING_STOPPED });
};

export const addModule = (module, notify) => async (dispatch) => {
  try {
    notify("Adding Module...");
    const { data } = await api.addCourseModule(module);

    dispatch({ type: "MODULE_ADDED", payload: data });
    dispatch(setCurrentModule(data));
    notify("New Module Added", colors.success);
  } catch (ex) {
    console.log(ex.response.data);
  }
};

export const deleteModule =
  (module, notify, prevState, isCurrentModule) => async (dispatch) => {
    try {
      notify("Deleting module...");
      await api.deleteModule(module._id);
      dispatch({ type: "MODULE_DELETED", payload: module });
      if (isCurrentModule) dispatch(clearCurrentModule());
      notify("Module Deleted", colors.success);
    } catch (err) {
      notify("Opps!! Module could not be deleted.", colors.danger);
      dispatch({ type: "MODULES_REVOKED", payload: prevState });
    }
  };

export const clearModulesOnLogout = () => async (dispatch) => {
  dispatch(clearCurrentModule());
};