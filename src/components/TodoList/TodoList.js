import React from "react";
import TodoItem from "./TodoItem";

class TodoList extends React.Component{
constructor(props){
    super(props);

    this.state = {
        todoList: [
            {id: 1,text: 'go to party'},
            {id: 2,text: 'meet friends'},
            {id: 3,text: 'have a walk'}
        ]
    }
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

        <ul>
            {this.renderLi()}
        </ul>
        </>
    )
}
}

export default TodoList;