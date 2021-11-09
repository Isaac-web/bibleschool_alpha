import {ADMINS_FETCHED, ADMINS_REMOVED, ADMIN_ADDED, LOADING_STARTED, LOADING_STOPPED} from "../../config/reduxContants";
import {colors} from "../../config";


const adminList = [
    {_id: "1", name: "Admin One", status: "Status"},
    {_id: "2", name: "Admin Two", status: "Status"},
]


export const fetchAdmins = () =>  async dispatch => {
    dispatch({type: LOADING_STARTED});
    dispatch({type: ADMINS_FETCHED, payload: adminList});
    dispatch({type: LOADING_STOPPED});
}



export const addAdmin = (admin, notify) => async dispatch =>  {
    try{
        dispatch({type: ADMIN_ADDED, payload: admin});
        console.log("Adding on the server...");
        notify("New Admin added.", colors.success);
    }
    catch(err) {
        notify("Opps! Something went wrong.", colors.danger);
    }
}


export const removeAdmin = (id, notify) => async dispatch => {
    try{
        dispatch({type: ADMINS_REMOVED, payload: id});
        notify("Admin removed.", colors.success);
    }
    catch(err) {
        notify("Opps! Could not delete admin.", colors.danger);
    }
}