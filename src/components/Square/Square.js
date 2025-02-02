// Мы вводим число - где то на стронице отображается квадрат этого чилса ++++++++

import React,{ useState, useRef } from 'react';

const Square = () => {
const [number,setNumber] = useState(1);
const refContainer = useRef(null);

console.log(refContainer);

    const changeHandler = ({target: {value}})=>{
        setNumber(Number(value))

        const { current } = refContainer

        if(value >=1 && value <=10){
            current.style.backgroundColor = 'green'
        } else if(value >=11&& value <=30){
            current.style.backgroundColor = 'yellow'
        } else if(value >30){
            current.style.backgroundColor = 'red'
            current.style.color = 'white'
        } else if(value <0){
            current.style.backgroundColor = 'pink'
            current.style.color = 'white'
        } else {

        }
    }

    return (
        <>
            <h1>NUmber square</h1>  
            <input 
                type='number' 
                placeholder='Enter number o0o' 
                value={number} 
                onChange={changeHandler}
                ref={refContainer}
            />
            <p> Square: {number**2}</p>
        </>
    );
}

export default Square;



/* 

- Если пользователь вводит число до 10 (включно) - инпут должен быть зеленого цвета
- Если пользователь вводит число от 11 до 30 (вкл) - инпут должен быть желтого цвета
- Если пользователь вводит число больше 30 - инпут должен быть красного цвета, цвет текста - белый
- Если пользователь вводит отрицательноге число - инпут должен быть розового цвета, цвет текста - белый

*/


/* 

У вас есть компонента с инпутом.
При загрузке компоненты - сфокусируйтесь на инпуте
Используйте для этого реф.

Подсказка.

Вы где то сокдаёте реф: iniputRef 

useEffect(()=>{
    inputRef.current.focus();
    },[])

*/
