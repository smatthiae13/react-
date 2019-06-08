import React from 'react';
import './Person.css';

 
//dont need a component here because we are not using a class to extend a component, 
//we are creating a function

const person = (props) => {
    return   (
        <div className="Person">
             <p onClick={props.click}>I am {props.name} and I am {props.age}</p>
             <p>{props.children}</p>
             <input type="text" onChange={props.changed} value={props.name}/>

</div>
)
};
// use as many of these state less - presentational - dumb - pure functional components
// as possible, makes coding easier

export default person;