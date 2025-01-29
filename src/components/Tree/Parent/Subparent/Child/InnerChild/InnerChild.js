import React, { useContext } from 'react';
import { UserContext } from '../../../../../../contexts/userContext';
import { withUser } from '../../../../../../HOC';


const InnerChild = (props) => {
     const {user: {firstName,lastName,email,avatar},logOut} = useContext(UserContext)
       
            return (
            <div >
            I`m InnerChild BITCH
            <button onClick={logOut}>Log Out</button>
            <p>
            {firstName} {lastName} {email}
            </p>
            </div>
            )
       
    
}

export default InnerChild;
