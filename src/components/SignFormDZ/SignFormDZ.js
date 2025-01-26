import React, { Component } from 'react';
import * as yup from 'yup'

const objFrom = {
    email: '',
    password: ''
}

const SIGN_FORM = yup.object({
    email: yup.string().required().email(),
    password: yup.string().required().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)
})

class SignFormDZ extends Component {
    constructor(props){
        super(props)

        this.state = {
            ...objFrom
        }
    }
    
    ChangeInput = ({target: {value,name}})=>{
        this.setState({
            [name]: value
        });
    }

    submitHandler = (event)=>{
        event.preventDefault();
        console.log(SIGN_FORM.isValidSync(this.state)); // Потенциально тут можно делать запит на сервер
    }

    render() {
        const {email,password} = this.state
        return (
            <form onSubmit={this.submitHandler}>
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

export default SignFormDZ;
