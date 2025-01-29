import React, {useRef, useEffect} from 'react';

const SquarePractise = () => {
    const inputRef = useRef()

    useEffect(()=>{
        inputRef.current.focus();
        },[])



    return (
        <>
            <input type='text' ref={inputRef}/>
        </>
    );
}

export default SquarePractise;
