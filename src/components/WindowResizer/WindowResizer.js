/* 

Написать компоненту WindowResizer
Которая выводит размер вьюпорта на поточный момент


Curretn viewport width:  ....px
Curretn viewport heigth: ....px

*/

import React, { Component } from 'react';

class WindowResizer extends Component {
    constructor(props){
        super(props)

        this.state = {
            width: 0,
            heigth: 0
        }
    }

    componentDidMount(){
        window.addEventListener('resize',this.eventHandler);
    }

    componentWillUnmount(){
        window.removeEventListener('resize',this.eventHandler)
    }
    
    eventHandler= ()=>{
        this.setState({
            width: window.innerWidth,
            heigth: window.innerHeight
        })
    }

    render() {
        const {width,heigth} = this.state
        return (
            <div>
                <p>Curretn viewport width:{width}</p>
                <p>Curretn viewport heigth:{heigth}</p>
            </div>
        );
    }
}

export default WindowResizer;
