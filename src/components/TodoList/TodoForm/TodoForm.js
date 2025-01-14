import React from "react";
import styles from "./TodoFormStyle.module.css"

class TodoForm extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            inpValue: ''
        }
    }

    changeImp= (targ)=>{
        const {target: {value}} = targ

        this.setState({
            inpValue: value
        })
    }

    submitFnc= (event) =>{
        const {inpValue} = this.state
        event.preventDefault()
        this.props.addTask(inpValue)
    }

    render(){
        const {inpValue} = this.state
        return(
            <form onSubmit={this.submitFnc} className={styles.container}>
            <input type="text" onChange={this.changeImp} value={inpValue} />
            <button type="submit">Add task</button>
            </form>
        )
    }
}

export default TodoForm;