import React from 'react';

const Scroll = (props) => {
    // Every props has children. Even if you don't pass in a prop. 
    return (
        <div style={{overflowY: 'scroll', border: '5px solid black', height: '800px'}}>
            {props.children}
        </div>
    );
};

export default Scroll;