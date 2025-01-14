import React from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm/TodoForm";
import styles from './TodoListStyle.module.css';

class TodoList extends React.Component{
constructor(props){
    super(props);

    this.state = {
        todoList: [
            {id: 1,text: 'go to party'},
            {id: 2,text: 'meet friends'},
            {id: 3,text: 'have a walk'},
            {id: 4,text: 'have a dinsssk'},
        ]
    }
}

addTaskFunc= (value) =>{
    if(value === ''){
        return;
    }

    
    const {todoList} = this.state
    const newArr = [...todoList,{
        id: todoList.length+1,
        text: value
    }]

    this.setState({
        todoList: newArr
    })
}

renderLi(){
    const {todoList} = this.state;
    // return todoList.map((task) => <li key={task.id}>
    //     {task.text}
    //     <button onClick={()=>{this.removeTask(task.id)}}>XxX</button>
    // </li>);
    
    return todoList.map((task) => 
    <TodoItem 
    key={task.id} 
    text={task.text} 
    delCallback={() => {this.removeTask(task.id)}}
    />);
}

removeTask(taskIDtoRemove){
    const {todoList} = this.state;
    const filtredArray = todoList.filter((task,index,arr) => task.id !== taskIDtoRemove);

    this.setState({
        todoList: filtredArray
    });
}

render(){
    return (
        <>
        <h1>TODOLIST</h1>
        <TodoForm addTask={this.addTaskFunc}/>
        <ul className={styles.container}>
            {this.renderLi()}
        </ul>
        </>
    )
}
}

export default TodoList;


/* 

TodoList - компонента в которой происходит управление списком задача и рендерится сам список задач

Задача:
Сделать компоненту TodoForm, которая будет представлять собой форму 
Там будет 1 инпут - текст таски 
И кнопка которая будет добовлять таску к списку в отцовской компоненте TodoList

TodoList - отцовтская компонента 
TodoForm - ребенок компонента

*/
