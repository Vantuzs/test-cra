import React from 'react';
import { UserContext } from '../../../../../../contexts/userContext';

const InnerChild = (props) => {
    // const {user: {firstName,lastName,email,avatar}} = props
    return (
        <UserContext.Consumer>
            {( {user: {firstName,lastName,email,avatar},logOut})=>{
                return (
                <div >
                I`m InnerChild BITCH
                <button onClick={logOut}>Log Out</button>
                <p>
                {firstName} {lastName} {email}
                </p>
                </div>
                )
            }}
        </UserContext.Consumer>
    );
}

export default InnerChild;
