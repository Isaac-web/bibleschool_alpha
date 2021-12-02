import {CURRENT_ENROLLMENT_MODULE_SET, CURRENT_ENROLLMENT_MODULE_CLEARED} from "../../config/reduxContants";


const initialState = {loading: false, data: {_id: "", title: "", subTitle: "", imageUri: "", questions: []}};

const currentEnrollmentModule = (state = initialState, action) => {
   switch(action.type){
        case CURRENT_ENROLLMENT_MODULE_SET:
            return {...state, data: action.payload};
        case CURRENT_ENROLLMENT_MODULE_CLEARED: 
            return state;
       default: 
        return state;
   }
}


export default currentEnrollmentModule;