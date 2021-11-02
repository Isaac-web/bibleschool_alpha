import {LOADING_STARTED, LOADING_STOPPED, USERS_FETCHED, USERS_SEARCHED} from "../../config/reduxContants";
import formatSearchText from "../../utils/formatSearchText";

const data = [
    {_id: "1", name: "Coordinator One", status: "Admin"},
    {_id: "2", name: "Coordinator Two", status: "normal"},
    {_id: "3", name: "Coordinator Three", status: "normal"},
    {_id: "4", name: "Coordinator Four", status: "normal"},
    {_id: "5", name: "Coordinator Five", status: "normal"},
    {_id: "6", name: "Coordinator Six", status: "normal"},
    {_id: "7", name: "Coordinator Seven", status: "normal"},
]


export const getUsers = () => async dispatch => {
    dispatch({type: LOADING_STARTED});
    dispatch({type: USERS_FETCHED, payload: [...data]});
    dispatch({type: LOADING_STOPPED});
}


export const searchUsers = (username) => async dispatch => {
    dispatch({type: LOADING_STARTED});
    const result = data.filter(item => formatSearchText(item.name).includes(formatSearchText(username)));
    dispatch({type: USERS_SEARCHED, payload: result});
    dispatch({type: LOADING_STOPPED});
}




