import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import UserList2 from "./UserList2.0/UserList";
import Counter from "./Counter/CounterPage"
import TodoList from "./TodoList/TodoList";
import AlohaDashboard from "./AlohaDashboard/AlohaDashboards"
import Home from "./Home/Home";
import NotFound from "./NotFound/NotFound";


function App(props){
    return (
        <BrowserRouter>
            <nav>
                <ul>
                    <li><Link to='counter'>Go to Counter component</Link></li>
                    <li><Link to='users'>Go to UserList component</Link></li>
                    <li><Link to='todo'>Go to TodoList component</Link></li>
                    <li><Link to='aloha'>Go to AlohaDashboard component</Link></li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/counter" element={<Counter />} />
                <Route path="/users" element={<UserList2/>}/>
                <Route path="/todo" element={<TodoList/>}/>
                <Route path="/aloha" element={<AlohaDashboard/>}/>
                <Route path="/*" element={<NotFound/>}></Route>
            </Routes>
        </BrowserRouter>
    )
    
}

export default App;

/* 

1. SSR (server-side rendering) - Додатки которые рендерятся на сервере
2. CSR (client-side rendering) - Додатки которые рендерятся на клиенте

*/


