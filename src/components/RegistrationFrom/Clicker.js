import React,{useState, useReducer} from 'react';

function reducer(state,action){
    switch(action.type){
        case 'CLICK_INCREMENT':{
            return{
                ...state,
                count: state.count+1
            }
        } case 'CLICK_DECREMENT':{
            return{
                ...state,
                count: state.count-1
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

    const decrimentHandler = ()=>{
        dispatch({
            type: 'CLICK_DECREMENT'
        })
    }
    
    return (
        <>
            <h1>{state.count}</h1>
            <button onClick={clickHandler}>+1</button>
            <button onClick={decrimentHandler}>-1</button>
        </>
    );
}


/* 
Задача

Добавить декримент личильника к функционалу

+ 1. ПРопишите case в reducer
+ 2. Сделайте оброботчик собьтий нажатия(onClick)кнопки декременту
+ 3. Создайте в верстке кнопку и прикрепите к ней оброботчкий событий, который вы сделали в предыдещем пункте

*/

export default Clicker;