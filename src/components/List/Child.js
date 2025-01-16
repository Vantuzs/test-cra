import React from 'react';

const Child = (props) => {
    return (
        <article>
           {props.children} 
        </article>
    );
}

export default Child;


/* 

СДелать компоненту FlexContainer, которая отображает все переданые ей елементы как флекс детей
При этом flex-direction,alingh-items,justifyne-content должны передаватся этой компоненте как пропсы


Вередине App 

<flexContainer flexDirectoin="row",justifyneCOntent="center" >
<div></div>
</flexContsiner>


*/