export default (state = {loading: false, data: []}, action) => {
    switch(action.type){
        case "FETCH_COURSES":
            return {...state, data: action.payload};
        default: 
            return state;
    }
}