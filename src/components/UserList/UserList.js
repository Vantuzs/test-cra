import React from "react";
import { getUsers } from "../../api";
import UserCard from "./UserCard";
import "./style.css"

class UserList extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            users: []
        }
    }

    componentDidMount(){
        getUsers().then(data => {
            const {results} = data

            this.setState({
                users: results
            })
        });
    }

    render(){
        return (
            <>
            <section className="secticia">
                <UserCard userCard={this.state.users}></UserCard>
            </section>
            </>
        )
    }
}

export default UserList;