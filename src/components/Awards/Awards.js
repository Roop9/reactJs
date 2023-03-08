import React from 'react';
import './Awards.css';

function Awards(props) {
    return (
        <div className="awards">
            <h4>{props.title}</h4>
            <p>{props.place}</p>
            <p>{props.year}</p>
            <p>{props.optional}</p>
        </div>
    )
}

export default Awards
