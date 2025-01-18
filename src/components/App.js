import React from "react";
// import UserList from "./UserList/UserList";
// import TodoList from "./TodoList/TodoList";
import List from "./List/List";
import ContainerPr from "./ContainerPr.js/ContainerPr";
import UserList2 from "./UserList2.0/UserList";

function App(props){
    return (
        <>
    <button onClick={()=>{ window.close()}}>Close page</button>
    <button onClick={()=>{ window.open("https://githugb.com")}}>Open Git</button>
        </>
    )
    
}

export default App;

// name.module.css
