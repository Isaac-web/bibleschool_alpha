import {ADMINS_FETCHED, LOADING_STARTED, LOADING_STOPPED} from "../../config/reduxContants";


const adminList = [
    {_id: "1", name: "Admin One", status: "Status"},
    {_id: "2", name: "Admin Two", status: "Status"},
]


export const fetchAdmins = () =>  async dispatch => {
    dispatch({type: LOADING_STARTED});
    dispatch({type: ADMINS_FETCHED, payload: adminList});
    dispatch({type: LOADING_STOPPED});
}