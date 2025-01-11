// В компоненте UserCard нужно реализловать логику отмалевания одного пользователя 
// Этот пользователь спускается в компоненту юзерКард через пропсы, от отцовской компоненты юзерЛист 


/* 
задача 2
В комоненте UserList продумать возможность отрисовывания карточек для многих юзеров
*/


import "./style.css"
import { UserCardCreate } from "./UserCardCreate";

function UserCard(props){
    console.log(props);
    const {userCard} = props
    // const [obj] = userCard
    // const {email,name:{first,last},picture:{large}} = obj
    // console.log(obj);  
    
    // const {picture,email,name:{first,last}}=obj
    return userCard.map(data=> UserCardCreate(data))
    //     <div className="divas">
    //         <img src={large} className="imgishka"></img>
    //         <h3>{`${first} ${last}`}</h3>
    //         <div className="divas-line"></div>
    //         <div>{email}</div>
    //      <button>Dell</button>
    //  </div>
    
}

export default UserCard;