/* 

Задача: напистаь трекер положения мыши на нашем экране.

*/

import React, { useState, useEffect } from 'react';

const MouseTracker = (props) => {
    const [coordinates,setCordinates] = useState({
        x: 0,
        y: 0,
        conter: 0
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

        setCordinates((prevState)=>{
            return {
                ...prevState,
                x: clientX,
                y: clientY
            }
        })
    }

    const clickHanlder = (event)=>{
        setCordinates((prevState)=>{
            return {
                ...prevState,
                conter: coordinates.conter+1
            }
        })
    }


    return (
        <>
            <p>X: {coordinates.x}</p>   
            <p>Y: {coordinates.y}</p>
            <button onClick={clickHanlder}>Click ME!</button>
            <p>conter: {coordinates.conter}</p>
        </>
    );
}

export default MouseTracker;


/* 

Класовый setState

previousState = {
    x: 0,
    y: 0,
    counter: 0
}

this.setState({
    counter: this.state.counter + 1
})

=>
 
{...prevState, ...newState } -->> {x: 0, y: 0, counter: 1}

Хуковый setState // Хуковый setState не будет дополнять попередним станом!

previousState = {
    x: 0,
    y: 0,
    counter: 0
}

setState({
    counter: counter + 1
})

=>

{...newState} -->> {couner: 1}


*/
