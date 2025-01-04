import React from "react";

class Aloha extends React.Component {
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
        const isGreets = this.state.isGreet? 'Hello': 'Bye';
        // console.log(this.props);
        return <h1 onClick={()=>{this.clickHandler()}}>{isGreets} {this.props.firstName} {this.props.lastName}</h1>
    
    }
}

export default Aloha;


/* 

Доделать компоненту таким образом, что бы по нажатию на h1 текст "Hello" меняется на "Buy"

*/