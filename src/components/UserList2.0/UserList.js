import React from "react";
import UserCard from "./UserCard";
import { getUsers } from "../../api";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

class UserList2 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            filteredUsers: [],
            userCount: 100,
            isLoading: true,
            isError: false,
            page: 1
        }
    }

    componentDidUpdate(prevProps,prevState){
        const {page} = this.state
        if(prevState.page !== page){ // Если у нас изменился номер страници
            this.loadPage(page)

        } 
            
    }

    componentDidMount() {
        const { page } = this.state;

        this.loadPage(page)
    }

    renderUsers = () => {
        const { users, filteredUsers } = this.state;
        return filteredUsers.length > 0 
        ?
        filteredUsers.map((user) => <UserCard user={user} key={user.login.uuid} />)
        :
        users.map((user) => <UserCard user={user} key={user.login.uuid} />);
    }

    clickHandler = () => {
        getUsers().then(data => {
            const { results } = data;

            const tempArray = this.state.users;
            tempArray.push(results[0]);

            this.setState({
                users: tempArray
            })
        });
    }

    handleSearch = (event) => {
        const { target: {value: searchValue} } = event;
        const { users } = this.state;

        // 1
        // якщо в інпутику нічого немає, то чистимо масив відфільтрованих юзерів
        if(searchValue === '') {
            this.setState({
                filteredUsers: []
            });

            return;
        }
        
        // 2
        // Фільтруємо по прізвищу
        const filteredUsers = users.filter(user => user.name.last.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1);

        // 3
        // кладемо в стейт відфільтрованих юзерів
        this.setState({
            filteredUsers
        });
    }

    handleSetUserCount = (event) => {
        const { target: {value} } = event;

        this.setState({
            userCount: value
        });
    }

    handleLoadUsersClick = (page) => {
        const { userCount } = this.state;

        getUsers(userCount,page).then(data => {
            const { results } = data;

            const tempArray = this.state.users;
            results.forEach((user) => {
                tempArray.push(user);
            })

            this.setState({
                users: tempArray
            })
        })
         .catch((error) => {
            this.setState({
                isError: error
            });
        })
        .finally(() => {
            this.setState({
                isLoading: false
            });
        });
    }

    loadPage= (page)=>{
        const { userCount } = this.state;

        getUsers(userCount,page).then(data => {
            const { results } = data;
            

            this.setState({
                users: results
            })
        })
         .catch((error) => {
            this.setState({
                isError: error
            });
        })
        .finally(() => {
            this.setState({
                isLoading: false
            });
        });
    }

    prevBtnHandler = ()=> {
        const {page} = this.state
        if(page > 1){
            this.setState({
                page: page-1
            })
        }
        
    }

    nextBtnHandler = ()=> {
        const {page} = this.state
        this.setState({
            page: page+1
        })
    }


    render() {
        const { users, isLoading,isError } = this.state;
        console.dir(isError);

        return (
            <>
                <h1 className="header-text">Users List</h1>

                <input type="number" min={1} max={500} onChange={this.handleSetUserCount} />
                <button onClick={this.handleLoadUsersClick}>Load users</button>

                <input type="text" placeholder="Search by lastname" onChange={this.handleSearch} />


                <button onClick={() => this.clickHandler()}>Add user</button>

                {isLoading && <ClimbingBoxLoader color="#5666f3" size={25} cssOverride={{display: "block", margin: "0 auto",}}/>}
                {isError && <h1>Error happend 0o0 ===  {isError.message}</h1>}

                <button onClick={this.prevBtnHandler}>Previous page</button>
                <button onClick={this.nextBtnHandler}>Next page</button>

                <section className="card-container">{users.length ? this.renderUsers() : null}</section>
            </>
        )
    }
}

export default UserList2;

/*

+ 1. Реалізувати таку логіку, щоб за замовчуванням ми підвантажували 100 користувачів.

+ 2. Отримуємо список користувачів з БД (randomuser.me)
Зробити інпутик завдяки якому можна буде фільтрувати користувачів за прізвищем

+ 3. Додаткове завдання.
Зробити ще один інпут з кнопкою, де ви можете вказати, яку кількість користувачів ви маєте підгрузити

*/