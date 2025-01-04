import React from "react";

class Greeting extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            
        }
    }

    // тут могут быть какието оброботчики событий

    render(){
        console.log(this.props);
        return <h1>Hello {this.props.name}</h1>
    
    }
}

export default Greeting;