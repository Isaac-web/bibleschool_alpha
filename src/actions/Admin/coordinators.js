import * as api from "../../api";
import {COORDINATOR_ADDED, COORDINATORS_FETCHED, LOADING_STARTED, LOADING_STOPPED} from "../../config/reduxContants";

export const fetchCoordinators = () => async dispatch => {
    dispatch({type: LOADING_STARTED});
    const {data} = await api.getAdminCoordinators();
    dispatch({type: COORDINATORS_FETCHED, payload: data});
    dispatch({type: LOADING_STOPPED});
}


export const addCoordinator = (coordinator) => async dispatch => {
    dispatch({type: COORDINATOR_ADDED, payload: coordinator})
}