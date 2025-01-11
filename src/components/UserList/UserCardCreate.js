import "./style.css"
export const UserCardCreate = (props)=>{
    const {email,name:{first,last},picture:{large}} = props
    return (
        <div className="divas">
        <img src={large} className="imgishka"></img>
        <h3>{`${first} ${last}`}</h3>
        {/* <div className="divas-line"></div> */}
        <div>{email}</div> 
     <button>Dell</button>
 </div>
    )
}

