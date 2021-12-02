import * as api from "../../api/index";
import {ADMIN_ENROLLMENTS_FETCHED, LOADING_STARTED, LOADING_STOPPED} from "../../config/reduxContants";


export const fetchEnrollments = () => async dispatch => {
    dispatch({type: LOADING_STARTED});
    const {data} = await api.getAdminEnrollments();   
    dispatch({type: ADMIN_ENROLLMENTS_FETCHED, payload: data})
    dispatch({type: LOADING_STOPPED});
}