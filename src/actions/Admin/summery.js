import * as api from "../../api/index";

export const getAdminSummery = () => async (dispatch) => {
  const { data } = await api.getAdminSummery();

  dispatch({ type: "ADMIN_SUMMERY_FETCHED", payload: data });
};
