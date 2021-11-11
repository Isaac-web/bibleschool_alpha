import {colors} from "../../config";
import {clearCurrentModule, setCurrentModule} from "../Coordinator/currentModule";

const data = [
    {_id: "1", title: "Title1", subtitle: "subtitle1"},
    {_id: "2", title: "Title2", subtitle: "subtitle2"},
    {_id: "3", title: "Title3", subtitle: "subtitle3"},
    {_id: "4", title: "Title4", subtitle: "subtitle4"},
    {_id: "5", title: "Title5", subtitle: "subtitle5"},
    {_id: "6", title: "Title6", subtitle: "subtitle6"},
    {_id: "7", title: "Title7", subtitle: "subtitle7"},
    {_id: "8", title: "Title8", subtitle: "subtitle8"},
    {_id: "9", title: "Title9", subtitle: "subtitle9"},
    {_id: "10", title: "Title10", subtitle: "subtitle10"},
];


export const fetchModules = () => dispatch => {
    console.log("Fetching from the server...");
    dispatch({type: 'MODULES_FETCHED', payload: data })
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