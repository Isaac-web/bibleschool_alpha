import {colors} from "../../config";
import {LOADING_STARTED, LOADING_STOPPED} from "../../config/reduxContants";
import {clearCurrentModule, setCurrentModule} from "../Coordinator/currentModule";
import * as api from "../../api";


export const fetchModules = () => async dispatch => {
    dispatch({type: LOADING_STARTED })
    const {data} = await api.getCoordinatorModules();
    dispatch({type: 'MODULES_FETCHED', payload: data })
    dispatch({type: LOADING_STOPPED })
}


export const addModule = (module, notify) => async dispatch => {
    
    notify("Adding Module...");
    console.log("Calling server...");
    const data = {...module, _id: Date.now().toString(), module};
    
    dispatch({type: "MODULE_ADDED", payload: data});
    dispatch(setCurrentModule(data));
    notify("New Module Added", colors.success);
}


export const deleteModule = (module, notify, prevState, isCurrentModule) => async dispatch  => {
    try {
        console.log("Deleting module from the server...");
        dispatch({type: "MODULE_DELETED", payload: module});
        if(isCurrentModule) dispatch(clearCurrentModule());
        
    }
    catch(err) {
        notify("Opps!! Module could not be deleted.", colors.danger);
        dispatch({type: "MODULES_REVOKED", payload: prevState});
    }
}