
import React, { Component } from 'react';
import SignUpForm from './LoginForm/LoginForm';
import SignFormDZ from './SignFormDZ/SignFormDZ';
import NewCounter from './NewCounter/NewCounter';
import NewCounerFunction from './NewCounter/NewCounerFunction';


class App extends Component {
    constructor(props){
        super(props)

        this.state = {
           
        }
    }

 

    render() {
        // console.log(userContext);
        return (
           <NewCounerFunction/>
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

