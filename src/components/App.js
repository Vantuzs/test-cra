
import React, { Component } from 'react';
import Counter from './Counter/Counter';
import Clicker from './RegistrationFrom/Clicker';
import RegistrationFrom from './RegistrationFrom/RegistrationFrom';



class App extends Component {
   

    render() {
        return (
            <RegistrationFrom/>
        );
    }
}

export default App;


/* 

1. SSR (server-side rendering) - Додатки которые рендерятся на сервере
2. CSR (client-side rendering) - Додатки которые рендерятся на клиенте



loadData={()=>{
            return fetch('./phones.json')
            .then(response=>response.json())
        }} 
        
        renderData={(state)=>{
            const {data,isLoading,isError} = state

            return (
            <>
                {isLoading && <div>Loading... 🐷</div>}  
                {isError && <div>Eroor happening 🦧 : {isError.message}</div>} 

                <ul>
                    {data.map(data=><li>Brand: {data.brand} --- Model: {data.model} --- Prise: {data.prise}</li>)}
                </ul>
            </>
            );
        }}
*/


/* 

Компонент высшего порядка - функция, которая принимает компонент как аргумент и возвращает новый компонент

*/

