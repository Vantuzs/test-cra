import { render } from "@testing-library/react";

function TodoItem(props){
    return (
        <li>
         {props.text}
         <button onClick={()=>{props.delCallback()}}>Dell</button>
     </li>
    )
}

export default TodoItem;