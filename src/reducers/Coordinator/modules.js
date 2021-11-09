

const modules = (state = {loading: false, data: []}, action) => {
    switch(action.type) {
        case 'MODULES_FETCHED':
            return {...state, data: action.payload}
        case 'MODULE_ADDED':
            return {...state, data: [...state.data, action.payload]}
        default: 
            return state;
    }
}


export default modules;