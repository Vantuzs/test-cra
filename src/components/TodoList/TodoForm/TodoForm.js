import React from "react";
import styles from "./TodoFormStyle.module.css"
import cx from 'classnames'

// "*" - Запрещенный символ, нужно реализовать вилидацию 

class TodoForm extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            inpValue: '',
            isInputValid: true, 
        }
    }

    changeImp= (targ)=>{
        const {target: {value}} = targ

        if(value.includes('*') === true){
            this.setState({
                isInputValid: false
            })
        } else {
            this.setState({
                inpValue: value,
                isInputValid: true
            })
        }
    }

    submitFnc= (event) =>{
        const {inpValue} = this.state
        event.preventDefault()
        this.props.addTask(inpValue)
    }

    render(){
        const {inpValue,isInputValid} = this.state

        const className = cx({
            [styles.input]: true,
            [styles['invalid-inpute']]: !isInputValid 
        })

        return(
            <form onSubmit={this.submitFnc} className={styles.container}>
                <input type="text" 
                onChange={this.changeImp} 
                value={inpValue}  
                // className={`${styles.input} ${isInputValid  ? '': styles['invalid-inpute']}`}
                className={className}

                />
                <button type="submit">Add task</button>
            </form>
        )
    }
}

export default TodoForm;

// function cx(objectClassNames){
//     // const cort = Object.entries(objectClassNames);
//     // const filtredArray = cort.filter(([className,condition])=>condition);
//     // const mapArray = filtredArray.map(([className,condition]) => className);
//     // return mapArray.join(' ')

//     return Object.entries(objectClassNames)
//     .filter(([className,condition])=>condition)
//     .map(([className,condition]) => className)
//     .join(' ')
// }

/*

objectClassNames = {
    className1: true,
    className2: true,
    className2: false,
}

[[className1, true], [className2, true], [className3, false] ] 
=>
[[className1, true], [className2, true]]
=>
[className1, className2]
=>
'className1 className2'

*/