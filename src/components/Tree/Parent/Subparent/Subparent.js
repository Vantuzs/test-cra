import React from 'react';
import Child from './Child/Child';
import { withTheme,withUser } from '../../../../HOC';
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

// const SubparentWithTheme = withTheme(Subparent);

// const SubparentWithThemeAndUser = withUser(SubparentWithTheme)


export default withUser(withTheme(Subparent));
