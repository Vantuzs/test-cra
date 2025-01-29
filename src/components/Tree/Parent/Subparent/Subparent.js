import React, { useContext } from 'react';
import Child from './Child/Child';
import { UserContext } from '../../../../contexts/userContext';
import { ThemeContext } from '../../../../contexts/themeContext';
import CONSTANTS from '../../../../constants';
const {THEMES} = CONSTANTS



const Subparent = () => { // Тут мы фокусируемся на решении нашей задачи, без хлам-кода (Консьюмеров)
    const {user: {firstName}} = useContext(UserContext);
    const {theme,setTheme} = useContext(ThemeContext)
    
    const nextTheme = theme === THEMES.LIGHT ? THEMES.DARK: THEMES.LIGHT
    return (<div>
        Subparent
        <p>{ firstName}</p>
        <button onClick={()=> setTheme(nextTheme)}>CLick to change theme</button>
        <Child />
    </div>)
}

export default Subparent;
