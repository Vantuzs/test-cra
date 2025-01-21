
import React, { Component } from 'react';
import Tree from './Tree/Tree';
import { UserContext } from '../contexts/userContext';

class App extends Component {
    constructor(props){
        super(props)

        this.state = {
            user: {
                firstName: 'John',
                lastName: 'Doe',
                email: 'johndoe@gmail.com',
                avatar: 'https://www.rodyna.in.ua/wp-content/uploads/2018/12/%D0%93%D0%BE%D1%80%D0%B8%D0%BB%D0%B0_7.jpg'
            }
        }
    }
    render() {
        // console.log(userContext);
        return (
            <UserContext.Provider value={this.state.user}>
            <Tree />
            </UserContext.Provider>
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


