import React from 'react';
import Child from './Child/Child';
import { withTheme } from '../../../../HOC';
import { UserContext } from '../../../../contexts/userContext';
import CONSTANTS from '../../../../constants';
const {THEMES} = CONSTANTS



const Subparent = (props) => { // Тут мы фокусируемся на решении нашей задачи, без хлам-кода (Консьюмеров)
    const nextTheme = props.theme === THEMES.LIGHT ? THEMES.DARK: THEMES.LIGHT
    return (<div>
        Subparent
        <p>{props.user.firstName}</p>
        <button onClick={()=> props.setTheme(nextTheme)}>CLick to change theme</button>
        <Child />
    </div>)
}

const SubparentWithThemeAndUser = (props) =>{ // Компонента которая занимается заворачивание в консьюмеры
    return (
        <UserContext.Consumer>
            {({user,logOut})=>{
                const SubparentThemed = withTheme(Subparent)
                return(
                    <SubparentThemed user={user} logOut={logOut}/>
                )
            }}
        </UserContext.Consumer>
    )
}


export default SubparentWithThemeAndUser;
