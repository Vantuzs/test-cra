import React from 'react';
import InnerChild from './InnerChild/InnerChild';
import { UserContext } from '../../../../../contexts/userContext';
import styles from './Child.module.css'


const Child = (props) => {
    return (
       <UserContext.Consumer>
        {({user})=>{
            return(
                <div>
                    Child
                    <img src={user.avatar} className={styles.img} alt={`${user.firstName} ${user.lastName}`}/>
                    <InnerChild/>
                </div>
            )
        }}
       </UserContext.Consumer>
    )
}

export default Child;
