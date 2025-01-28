/* 

Задача: напистаь трекер положения мыши на нашем экране.

*/

import React, { useState, useEffect } from 'react';

const MouseTracker = (props) => {
    const [coordinates,setCordinates] = useState({
        x: 0,
        y: 0
    });

    useEffect(()=>{
        window.addEventListener('mousemove',trakerHandler);

        return ()=>{ //clean function = componentWillUnmount
            window.addEventListener('mousemove',trakerHandler);
        }
        // пустой масив залежностей = componentDidMiunt
    },[]); // Когда вы прописываете залежности в DependencyList = componentDidUpdate


    const trakerHandler = (event) =>{
        const {clientX,clientY} = event

        setCordinates({
            x: clientX,
            y: clientY
        })
    }




    return (
        <>
            <p>X: {coordinates.x}</p>   
            <p>Y: {coordinates.y}</p>
        </>
    );
}

export default MouseTracker;
