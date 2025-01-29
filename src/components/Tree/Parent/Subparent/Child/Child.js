import React, { useContext } from 'react';
import InnerChild from './InnerChild/InnerChild';
import styles from './Child.module.css'
import { UserContext } from '../../../../../contexts/userContext';

const Child = () => {
const {user: {firstName,lastName,avatar}} = useContext(UserContext)

    return(
        <div>
            Child
            <img src={avatar} className={styles.img} alt={`${firstName} ${lastName}`}/>
            <InnerChild/>
        </div>
    )
}

export default Child;
