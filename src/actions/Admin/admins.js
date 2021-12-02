import * as api from "../../api";
import { colors } from "../../config";
import {
  ADMINS_FETCHED,
  ADMINS_REMOVED,
  ADMIN_ADDED,
  LOADING_STARTED,
  LOADING_STOPPED,
} from "../../config/reduxContants";

export const fetchAdmins = () => async (dispatch) => {
  dispatch({ type: LOADING_STARTED });
  const { data } = await api.getAdmins();
  dispatch({ type: ADMINS_FETCHED, payload: data });
  dispatch({ type: LOADING_STOPPED });
};

export const addAdmin = (admin, notify) => async (dispatch) => {
  try {
    await api.addAdmin(admin._id);
    dispatch({ type: ADMIN_ADDED, payload: admin });
    notify("New Admin added.", colors.success);
  } catch (err) {
    notify("Opps! Something went wrong.", colors.danger);
  }
};

export const removeAdmin = (id, notify) => async (dispatch) => {
  try {
    await api.removeAdmin(id);
    dispatch({ type: ADMINS_REMOVED, payload: id });
    notify("Admin removed.", colors.success);
  } catch (err) {
    notify("Opps! Could not delete admin.", colors.danger);
  }
};
