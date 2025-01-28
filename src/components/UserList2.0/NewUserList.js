import React, {useState,useEffect} from 'react';
import { getUsers } from '../../api';
import UserCard from './UserCard';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const NewUserList = () => {
const [users,setUsers] = useState([]);
const [filteredUsers,setFilteredUsers] = useState([]);
const [userCount,setUserCount] = useState(100);
const [isLoading,setIsLoading] = useState(true);
const [isError,setIsError] = useState(false);
const [page,setPage] = useState(1);





const loadPage= ()=>{
    getUsers(userCount,page).then(data => {
        const { results } = data;
        
        
        setUsers(results)
    })
    .catch((error) => {
        setIsError(error)
    })
    .finally(() => {
        setIsLoading(false)
    });
}

useEffect(()=>{
    loadPage();
},[page]);

    const renderUsers = () => {
    return filteredUsers.length > 0 
    ?
    filteredUsers.map((user) => <UserCard user={user} key={user.login.uuid} />)
    :
    users.map((user) => <UserCard user={user} key={user.login.uuid} />);
}


    const handleSearch = (event) => {
    const { target: {value: searchValue} } = event;

    // 1
    // якщо в інпутику нічого немає, то чистимо масив відфільтрованих юзерів
    if(searchValue === '') {
       setFilteredUsers([])

        return;
    }
    
    // 2
    // Фільтруємо по прізвищу
    const filteredUsers = users.filter(user => user.name.last.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1);

    // 3
    // кладемо в стейт відфільтрованих юзерів
    setFilteredUsers(filteredUsers)
}


    const handleSetUserCount = (event) => {
    const { target: {value} } = event;

    setUserCount(value)
}


    const prevBtnHandler = ()=> {
    if(page > 1){
        setPage(page-1)
    }
    
}

    const nextBtnHandler = ()=> {
    setPage(page+1)
}

    const clickHandler = () => {                 // NEED REVIV
    getUsers(1,50+1).then(data => {
        const { results } = data;

        console.log(results[0]);

        setUsers(prevUsers => [...prevUsers,results[0]])
    });
}



    return (
        <>
        <h1 className="header-text">Users List</h1>

        <input type="number" min={1} max={500} onChange={handleSetUserCount} />
        <button onClick={()=> loadPage()}>Load users</button>

        <input type="text" placeholder="Search by lastname" onChange={handleSearch} />


        <button onClick={()=> clickHandler()}>Add user</button>

        {isLoading && <ClimbingBoxLoader color="#5666f3" size={25} cssOverride={{display: "block", margin: "0 auto",}}/>}
        {isError && <h1>Error happend 0o0 ===  {isError.message}</h1>}

        <button onClick={prevBtnHandler}>Previous page</button>
        <button onClick={nextBtnHandler}>Next page</button>

        <section className="card-container">{users.length ? renderUsers() : null}</section>
    </>
    );
}

export default NewUserList;
