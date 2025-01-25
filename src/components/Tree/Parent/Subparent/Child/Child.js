import React from 'react';
import InnerChild from './InnerChild/InnerChild';
import { withUser } from '../../../../../HOC';
import styles from './Child.module.css'


const Child = (props) => {
    return(
        <div>
            Child
            <img src={props.user.avatar} className={styles.img} alt={`${props.user.firstName} ${props.user.lastName}`}/>
            <InnerChild/>
        </div>
    )
}

export default withUser(Child);
