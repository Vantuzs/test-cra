import React from "react";
import "./style.css"
class SignInForm extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: '',
            isEmailValid: true,
            isPasswordValid: false
        }
    } 

    // changeEmailHandler = ({target: {value}}) =>{
    //     this.setState({
    //         email: value
    //     });

    // }

    // changePasswodHandler = ({target: {value}})=>{
    //     this.setState({
    //         password: value
    //     })
    // }
    
    universalChangeHandler = ({target:{value,name}}) =>{
        
        this.setState({
            [name]: value
        })
    
    }

    submitHandler = (event)=>{
        event.preventDefault()
        console.log(this.state);

        // Задача: Если на момен отправки формы, всередине рядка отсутсвтует "@" форма не валидная
        if(!this.state.email.includes('@')){
            this.setState({
                isEmailValid: false
            })
        }else{
            this.setState({
                isEmailValid: true
            })
        }
    }


    render(){
        const {email,password,isEmailValid} = this.state

    return(
        <>
        <h1>Sign In Form</h1>
        <form className="form-wrapper" onSubmit={this.submitHandler}>
            <label>Type your email
            <input className={isEmailValid ? '': 'invalid' } type="text" placeholder="Email@email.com"  name="email" onChange={this.universalChangeHandler} value={email}/>
            </label>
            <label>Type your passwod
            <input type="password" placeholder="qwerty123" className="inputici" name="password" onChange={this.universalChangeHandler} value={password}/>
            </label>
            <button type="submit" className="btnSend">Send Form</button>
        </form>
        
        </>
    )
}
}

export default SignInForm;



/* 
Задача:

Написать компоненту с форомой, что складается с 1 инпута и кнопки отправки.
При нажимании на кнопку рядом с формой появляется надпись, который привествует пользователя, которое было написано в инпуте

*/