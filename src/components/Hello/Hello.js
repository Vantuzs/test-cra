import React from "react";
import "./style.css"

class Hello extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            hello: ''
        }

    }

    universalChangeHandler = ({target:{value,name}}) =>{
        
        this.setState({
            [name]: value
        })
    
    }

    subBtnFunc = (event) =>{
        alert(`Hello ${this.state.hello}`)
    }


    render(){
        const {hello} = this.state
        return(
            <>
            <h3>Форма Приветсвия</h3>
            <form>
                <label>Введите свое имя
                    <input type="text" placeholder="Victor" name="hello" onChange={this.universalChangeHandler} value={hello}/>
                    <button type="submit" onClick={this.subBtnFunc}>Hello vpn</button>
                </label>
            </form>
            </>
        )
    }
}

export default Hello;