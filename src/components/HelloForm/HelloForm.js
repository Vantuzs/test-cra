import React from "react";

// Компонент представляет собой дочирний компонент с формой в котором и будет запрашиватся имя пользователя

class HelloForm extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            name: ''
        }
    }
    
    submitHandler = (event)=>{
        event.preventDefault()
        this.props.sendUsernameTuParent(this.state.name)
        
    }
    
    
    universalChangeHandler = ({target:{value,name}}) =>{
        
        this.setState({
            [name]: value
        })
    
    }

    render(){
        return(
            <form onSubmit={this.submitHandler}>
            <input type="text" placeholder="Введите свое имя -_-" onChange={this.universalChangeHandler} name="name" value={this.state.name}/>
            <button>Send My name</button>
            </form>
        )
    }
}

export default HelloForm;