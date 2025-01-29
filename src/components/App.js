
import React, { Component } from 'react';
import Tree from './Tree/Tree'
import { ThemeContext } from '../contexts/themeContext';
import { UserContext } from '../contexts/userContext';
import CONSTANTS from '../constants';
const { THEMES } = CONSTANTS


class App extends Component {
    constructor(props){
        super(props)

        this.state = {
            user: {
                firstName: 'John',
                lastName: 'Doe',
                email: 'johndoe@gmail.com',
                avatar: 'https://cdn.britannica.com/92/212692-050-D53981F5/labradoodle-dog-stick-running-grass.jpg'
            },
            theme: THEMES.LIGHT
        }
    }

    logOut = () => {
        this.setState({
            user: {}
        });
    }

    setTheme = theme => {
        this.setState({
            theme
        });
    }

    render() {
        return (
            <ThemeContext.Provider value={{
                theme: this.state.theme,
                setTheme: this.setTheme
            }}>
                <UserContext.Provider value={{
                    user: this.state.user,
                    logOut: this.logOut
                }}>
                    App
                    <Tree />
                </UserContext.Provider>
            </ThemeContext.Provider>
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

