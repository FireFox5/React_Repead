import React from 'react';
import './AboutUS.css'
const AboutUs = (props) => {
    return (
        <div className='funny' >
         <h1> hi his name is {props.title}, and his age is {props.age} </h1>
        </div>
    );
};

export default AboutUs;