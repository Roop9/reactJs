import React from 'react';
import './Heading.css';

function Heading(props) {
    return (
        <div className="heading">
            {props.icon}
            <h3>{props.title}</h3>
        </div>
    )
}

export default Heading
