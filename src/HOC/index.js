import { ThemeContext } from "../contexts/themeContext"

// Компонент высшего порядка (High Order Component, HOC) - функция, которая принимает компонент как аргумент и возвращает новый компонент
export const withTheme = (Component)=> (props)=>{
    return(
        <ThemeContext.Consumer>
            {({theme,setTheme})=>{
                return <Component theme={theme} setTheme={setTheme} {...props}/>
            }}
        </ThemeContext.Consumer>
    )
}