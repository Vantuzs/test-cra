import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import PhonesLoader from "./PhonesLoader/PhonesLoader";
import TVLoader from "./TVLoader/TVLoader";
import DataProvider from "./DataProvider/DataProvider";
import DataTv from "./DataTv/DataTv";

function App(props){
    return (
        <>
        <DataProvider 
        loadData={()=>{
            return fetch('./phones.json')
            .then(response=>response.json())
        }} 
        >
            {(state)=>{
            const {data,isLoading,isError} = state

            return (
            <>
                {isLoading && <div>Loading... 🐷</div>}  
                {isError && <div>Eroor happening 🦧 : {isError.message}</div>} 

                <ul>
                    {data.map((data,index)=><li key={index}>Brand: {data.brand} --- Model: {data.model} --- Prise: {data.prise}</li>)}
                </ul>
            </>
            );
        }}
            </DataProvider>
            <DataProvider 
        loadData={()=>{
            return fetch('./tv.json')
            .then(response=>response.json())
        }} 
        >
            {(state)=>{
            const {data,isLoading,isError} = state

            return (
            <>
                {isLoading && <div>Loading... 🐷</div>}  
                {isError && <div>Eroor happening 🦧 : {isError.message}</div>} 

                <ol>
                    {data.map((data,index)=><li key={index}>Brand: {data.brand} --- Model: {data.model} --- Prise: {data.prise}</li>)}
                </ol>
            </>
            );
        }}
            </DataProvider>
        </>
    )
    
}

export default App;

/* 

1. SSR (server-side rendering) - Додатки которые рендерятся на сервере
2. CSR (client-side rendering) - Додатки которые рендерятся на клиенте



loadData={()=>{
            return fetch('./phones.json')
            .then(response=>response.json())
        }} 
        
        renderData={(state)=>{
            const {data,isLoading,isError} = state

            return (
            <>
                {isLoading && <div>Loading... 🐷</div>}  
                {isError && <div>Eroor happening 🦧 : {isError.message}</div>} 

                <ul>
                    {data.map(data=><li>Brand: {data.brand} --- Model: {data.model} --- Prise: {data.prise}</li>)}
                </ul>
            </>
            );
        }}
*/


