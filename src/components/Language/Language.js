import React from 'react';
import './Language.css';

function Language(props) {
    return (
        <div className="language">
            <div className="language__body">
                <p>{props.title}</p>
                <p>{props.fluency}</p>
            </div>
            
        </div>
    )
}

export default Language
