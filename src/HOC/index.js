
import { ThemeContext } from "../contexts/themeContext"
import { UserContext } from "../contexts/userContext"

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

export const withUser = (Component) =>(props)=>{
    return(
        <UserContext.Consumer>
            {({user,logOut})=>{
                return <Component user={user} logOut={logOut} {...props}/>
            }}
        </UserContext.Consumer>
    )
}