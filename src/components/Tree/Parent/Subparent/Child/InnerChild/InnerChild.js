import React from 'react';
import { withUser } from '../../../../../../HOC';


const InnerChild = (props) => {
       const {user: {firstName,lastName,email,avatar},logOut} = props
       
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

export default withUser(InnerChild);
