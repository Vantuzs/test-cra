import React from "react";
import { getUsers } from "../../api";
import UserCard from "./UserCard";
import "./style.css"

class UserList extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            users: [],
            filteredUsers: [],
            userCount: 100

        }
    }

    componentDidMount(){
        const {userCount} = this.state

        getUsers(userCount).then(data => {
            const {results} = data

            this.setState({
                users: results
            })
        });
    }

    handleSearch = (event) =>{
        const {target : {value: searchValue}} = event;
        const {users} = this.state;

        //1
        // если в инпуте ничего нет, то чистим масив отфильтрованых юзеров
        if(searchValue=== ''){
            this.setState({
                filteredUsers: []
            });

            return;
        }
        
        // 2 
        // Фильруем по фамилии
        const filteredUsers = users.filter(user=>user.name.last.toLowerCase().indexOf(searchValue.toLowerCase())!== -1 )

        // 3 
        // Кладём в стейт отфильтрованых юзеров
        this.setState({
            filteredUsers
        })
    }

    handleSetUserCount = (evetn) =>{
        const {target: {value}} = evetn;

        this.setState({
            userCount: value
        })

    }

    hadnleLoadUsersClick = (event) =>{
        const {userCount} = this.state
        getUsers(userCount).then(data => {
            const {results} = data;

            const temArray = this.state.users;
            results.forEach(user => {
                temArray.push(user)
            });

            this.setState({
                users: temArray
            })
        })
    }

    render(){
        const {users,filteredUsers} = this.state
        return (
            <>
            <input type="text" placeholder="Search vy lastName" onChange={this.handleSearch}/>
            <input type="number" min={1} max={100} onChange={this.handleSetUserCount} />
            <button onClick={this.hadnleLoadUsersClick}>Load users</button>
            <section className="secticia">
                {/* <UserCard userCard={filtredUsers.length > 0 ? filtredUsers: users}></UserCard> */}
                <UserCard userCard={filteredUsers.length > 0 ? filteredUsers: users}/>
            </section>
            </>
        )
    }
}

export default UserList;

/* 

+ 1. Реализовать такую логику, что бы по умолчанию мы подгружали 100 пользователей

2. Получаем список пользователей с БД (randomuser.me) 
Сделать инпутик с помощью которому можно будет фильтровать пользователей за Фамилией

3. Дополнительное задание.
Сделать еще один инпут с кнопкой, где вы можете указать, какое количество пользователей вы должны подгрузить

*/