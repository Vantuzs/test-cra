import React, { Component } from 'react';
import { SIGN_UP_SCHEMA } from '../../schemas';

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
}

class SingUpForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            ...initialState,
            isError: null
        }
    }

    ChangeInput = ({target: {value,name}})=>{
        this.setState({
            [name]: value
        });
    }

    submitHandler = (event)=>{
        event.preventDefault();

        try{
            const userObject = SIGN_UP_SCHEMA.validateSync(this.state); // Потенциально тут можно делать запит на сервер
            if(userObject){
                this.setState({
                    isError: null
                })    
            }
        } catch(err){
            this.setState({
                isError: err
            })
        }
    }

    render() {
        const {email,password,firstName,lastName,isError} = this.state
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

                {isError && <p style={{color: 'red',fontSize: '25px',backgroundColor: 'black'}} >{isError.message}</p>}
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
