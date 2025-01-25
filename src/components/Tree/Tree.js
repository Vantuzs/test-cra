import React from 'react';
import Parent from './Parent/Parent';
import style from './Tree.module.css'
import { ThemeContext } from '../../contexts/themeContext';
import { withTheme } from '../../HOC';
import CONSTANTS from '../../constants';
import cx from 'classnames';
const {THEMES} = CONSTANTS

const Tree = (props) => {
    const classNames = cx(style.container, {
        [style.lightTheme]: props.theme === THEMES.LIGHT,
        [style.darkTheme]: props.theme === THEMES.DARK
    })

    return (
        <div className={classNames}>
            Tree
            <Parent/>
        </div>
    )
}


const TreeWithTheme = withTheme(Tree)

export default TreeWithTheme;


