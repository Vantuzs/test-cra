import React, {useReducer} from "react";
import { RegistrationReducer } from "../../reducers/registrationReducer";
import CONSTANTS from "../../constants";
const {ACTIONS:{INPUT_CHANGE}}= CONSTANTS


const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
}


const RegistrationFrom = (props) => {
    const [state,dispatch] = useReducer(RegistrationReducer,initialState)

    const {firstName,lastName,email,password} = state

    const universalChangeHandler = ({target: {value,name}})=>{
        dispatch({
            type: INPUT_CHANGE,
            payload: {
                value,
                name
            } 
        })
    }

    const submitHandler = (event)=>{
        event.preventDefault();
        console.log(state); // ПОТЕНЦИАЛЬНО, тут мог быть запрос на сервер

    }

    return (
        <form onSubmit={submitHandler}> 
                <input type='text' placeholder='Enter your first NAME' name='firstName' value={firstName} onChange={universalChangeHandler}/>
                <input type='text' placeholder='Enter your last NAME' name='lastName' value={lastName} onChange={universalChangeHandler}/>
                <input type='email' placeholder='Enter your email' name='email' value={email} onChange={universalChangeHandler}/>
                <input type='password' placeholder='Enter your password' name='password' value={password} onChange={universalChangeHandler}/>
                <button>Send form Todurompf</button>
        </form>
    );
}

export default RegistrationFrom;



/* 
const [state,dispatch] = useReduser(reduser,initialState);

state - наше положение (обьект)
dispatch - фукнция, котора запусткает action

dispatch(ACTION_TYPE) -->> reducer -->> меняет state 

----------------------------------------------------------------------------------------

reducer - специальная функция, которая принимает поточный стейт и действие, котороя произошла (action)
На основе action reducer изменяет state и возвращает новый state

reducer: (state,action) => newState

state - обьект с поточными значениями стейта
action - или строчка с действием, которая произошла или обьект с информацией про действие, которая произошла
newState - обьект измененого положения, который возвращается с reducer

reducer - чистая (pure) функция:
1. Не имеет побочных эфектов (асинхронная работа);
2. детерминованая функция.

const action = {
    type: НАМ_ПРИШЕЛ_ОТВЕТ_С_СЕРВЕРА,
    payload: ТУТ_БУДУТ_НАШИ_ЮЗЕРЫ
}

----------------------------------------------------------------------------------------

initialState - обьект начального стейта

initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
}

*/