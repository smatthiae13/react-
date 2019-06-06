import React from 'react';
//dont need a component here because we are not using a class to extend a component, 
//we are creating a function

const person = (props) => {
    (<div>

    return <p>I am {props.name} and I am {props.age}</p>
    <p>{props.children}</p>
</div>
)
};


export default person;