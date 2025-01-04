import React from "react";

class Greeting extends React.Component {
    constructor(props){
        super(props)

        this.state = { 
            isGreet: true
        }
    }

    // тут могут быть какието оброботчики событий
    clickHandler(){
        this.setState({
            isGreet: !this.state.isGreet
        });
        // console.log(this.state.trfl);
    }

    render(){
        const isGreets = this.state.isGreet? 'Hello': 'Buy';
        // console.log(this.props);
        return <h1 onClick={()=>{this.clickHandler()}}>{isGreets} {this.props.name}</h1>
    
    }
}

export default Greeting;


/* 

Доделать компоненту таким образом, что бы по нажатию на h1 текст "Hello" меняется на "Buy"

*/