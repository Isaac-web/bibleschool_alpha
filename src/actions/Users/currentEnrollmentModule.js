import {CURRENT_ENROLLMENT_MODULE_CLEARED, CURRENT_ENROLLMENT_MODULE_SET}  from "../../config/reduxContants";


export const setCurrentEnrollmentModule = (currentModule) => async dispatch => {
    //call the server...

    console.log(currentModule);
    
    const data = currentModule;
    dispatch({type: CURRENT_ENROLLMENT_MODULE_SET, payload: data});
}


export const clearCurrentEnrollmentModule = () => async dispatch => {
    //call the server...

    dispatch({type: CURRENT_ENROLLMENT_MODULE_CLEARED, payload: {}});
}



// export const clearCurrentEnrollmentModule = (currentModule) => async dispatch => {
//     //call the server
//     const data = currentModule;
//     dispatch({type: "CURRENT_ENROLLMENT_MODULE_UPDATED", payload: data});
// }

