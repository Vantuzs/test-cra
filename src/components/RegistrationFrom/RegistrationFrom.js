import React,{useState, useReducer} from 'react';

function reducer(state,action){
    switch(action.type){
        case 'CLICK_INCREMENT':{
            return{
                ...state,
                count: state.count+1
            }
        }
        default:{
            return state;
        }
    }
}

const initialState = {
    count: 0,
    // тут еще может быть много других полей
}

const Clicker = () => {
    const [state,dispatch] = useReducer(reducer,initialState)

    const clickHandler = ()=>{
        dispatch({
            type: 'CLICK_INCREMENT'
        }); // В диспатч вы передаете обьекс action
    }
    
    return (
        <>
            <h1>{state.count}</h1>
            <button onClick={clickHandler}>+1</button>
        </>
    );
}

export default Clicker;


// const RegistrationFrom = (props) => {
//     const [firstName,setFirstName] = useState('')
//     const [lastName,setLastName] = useState('')
//     const [email,setEmail] = useState('')
//     const [password,setPassword] = useState('')


//   const universalChangeHandker = ({target: {value,name}}) =>{
//     switch(name){
//         case 'firstName': {
//             setFirstName(value)
//             break;
//         } case 'lastName':{
//             setLastName(value)
//             break;
//         } case 'email':{
//             setEmail(value)
//             break;
//         } case 'password': {
//             setPassword(value)
//             break;
//         }
//         default:{
//             break;
//         }
//     }

//   }
    

//     return (
//         <form> 
//                 <input type='text' placeholder='Enter your first NAME' name='firstName' value={firstName} onChange={universalChangeHandker}/>
//                 <input type='text' placeholder='Enter your last NAME' name='lastName' value={lastName} onChange={universalChangeHandker}/>
//                 <input type='email' placeholder='Enter your email' name='email' value={email} onChange={universalChangeHandker}/>
//                 <input type='password' placeholder='Enter your password' name='password' value={password} onChange={universalChangeHandker}/>
//                 <button>Send form Todurompf</button>
//         </form>
//     );
// }

// export default RegistrationFrom;



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