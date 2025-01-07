import React from "react";
import "./style.css"

function Indicator(props){
    const {divasText,divasTrFl} = props
    return (
        <div className={divasTrFl}>{divasText}</div>
    )

}

export default Indicator;



/* 

Задача:

Сделать функциональную компоненту, которая рендерить небольшой div 200x200
Рендеретить там текст, но текст, который эта компонентама рендерит, она плучает с пропcoв

*/