import React, { Component } from 'react';
import * as yup from 'yup'

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
}

const SIGN_UP_SCHEMA = yup.object({
    firstName: yup.string().required().min(2).max(52),
    lastName: yup.string().required().min(2).max(52),
    email: yup.string().required().email(),
    password: yup.string().required().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)
})

class SingUpForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            ...initialState
        }
    }

    ChangeInput = ({target: {value,name}})=>{
        this.setState({
            [name]: value
        });
    }

    submitHandler = (event)=>{
        event.preventDefault();
        console.log(SIGN_UP_SCHEMA.isValidSync(this.state)); // Потенциально тут можно делать запит на сервер
    }

    render() {
        const {email,password,firstName,lastName} = this.state
        return (
            <form onSubmit={this.submitHandler}>
                <input type='text'
                placeholder='Type your first name' 
                value={firstName} 
                onChange={this.ChangeInput} 
                name='firstName'
                />
                <input type='text'
                placeholder='Type your last name' 
                value={lastName} 
                onChange={this.ChangeInput} 
                name='lastName'
                />
                <input type='text'
                placeholder='Type your email' 
                value={email} 
                onChange={this.ChangeInput} 
                name='email'
                />
                <input type='text' 
                placeholder='Type your password' 
                value={password} 
                onChange={this.ChangeInput} 
                name='password'
                />
                <button>Send form</button>
            </form>
        );
    }
}

export default SingUpForm;



/* 

Валидация програмного забеспечення

Когда мы проверяем, тчо разработаный продукт - то, что хотел наш клиент.



Верификация прогрмного забеспечення

Когда мы проверяем, а как именно реализованные просьбы клиента

*/
