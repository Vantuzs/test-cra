import React, {useState} from 'react';


const NewCounerFunction = (props) => {
    const [state,setState] = useState(0);
    const [step,setStep] = useState(1)

    const increment =()=>{
        setState(state+step)
    }

    const changeHandler = ({target: {value}})=>{
        setStep(Number(value));
    }

    return (
        <>
            {state}
            <input type='number' onChange={changeHandler} value={step}/>
            <button onClick={increment}>+++++</button>
            
        </>
    );
}

export default NewCounerFunction;
