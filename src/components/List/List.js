import React, { Component } from 'react';
import Child from './Child';

class List extends Component {
    render() {
        return (
            <>
                <Child>
                    <h1>H!</h1>
                    <p>Hello child</p>
                    </Child>  
            </>
        );
    }
}

export default List;
