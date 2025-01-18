import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
// import UserList from "./UserList/UserList";
// import TodoList from "./TodoList/TodoList";
import List from "./List/List";
import ContainerPr from "./ContainerPr.js/ContainerPr";
import UserList2 from "./UserList2.0/UserList";


function App(props){
    return (
        <>
            <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            />

    <button onClick={()=>{ window.location.assign('https://www.w3schools.com/sql/')}}>Assing</button>
    <button onClick={()=>{ window.location.reload()}}>Reload</button>
    <button onClick={()=>{ window.location.replace('https://developer.mozilla.org/en-US/')}}>Replace</button>


    <p>Lorem tutut tatata sigma gism sdaw</p>
    <button onClick={()=>{ 
         
         window.navigator.clipboard.writeText('Lorem tutut tatata sigma gism sdaw')
         
            toast.success('🛎️ 🔑 🪒🧼 Text copieted')
         }}>Click to copy text</button>
        </>
    )
    
}

export default App;

// name.module.css
