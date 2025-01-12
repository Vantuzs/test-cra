/* 
Задача(*)

Форма, которая приветствуется должна быть всередине родительской формы.
В родительской форме сохраняется имя пользователя в стейте.

Тоесть, форма в которой запрашивается имя пользователя - детская форма.
ФОрма, в которой отображается приветствие имя пользователся - родительская форма.
Ребенок должен передать отцу name юзера, что бы тот смог с ним поприветствоватся


*/

import React from "react";
import HelloForm from "./HelloForm";

class HelloParent extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            name: 'Anonymus',
            phone: ''
        }
    }

    getStateFromCHild = (username) => {
        this.setState({
            name: username
        })
    }


    render(){
        const {name} = this.state
        return(
            <>
           
                <HelloForm sendUsernameTuParent={this.getStateFromCHild}/>
                <p>Hello {name}</p>
          
            </>
        )
    }
}

export default HelloParent;