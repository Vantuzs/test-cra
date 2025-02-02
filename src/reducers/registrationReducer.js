import CONSTANTS from "../constants";
const {ACTIONS: {INPUT_CHANGE}} = CONSTANTS
export function RegistrationReducer(state,action){
    switch(action.type){
        case INPUT_CHANGE:{
            const {payload: {value,name}} = action
            return{
                ...state,
                [name]: value

            }

        } 
        default: return state;
    }
}