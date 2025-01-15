import React, { Component } from 'react';
import FlexContainer from './FlexContainer';

class ContainerPr extends Component {
    render() {
        return (
            <FlexContainer flexDirection='row' justifyContent='center' alignItems='stretch'>
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
            </FlexContainer>
        );
    }
}

export default ContainerPr;
