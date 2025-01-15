import React from 'react';

const FlexContainer = (props) => {
const { children,flexDirection,justifyContent,alignItems } = props

    return (
        <div style={{
            display: 'flex',
            flexDirection,
            justifyContent,
            alignItems
        }}>
            {children}
            
        </div>
    );
}

export default FlexContainer;
