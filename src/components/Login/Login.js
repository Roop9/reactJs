import React from 'react';
import './Login.css';

// Material UI Components
import Button from '@mui/material/Button';

function Login(props) {
    return (
        <div className="login">
            <div className="login__body">
                <input type="text" className="input-text" placeholder="Username" />
                <input type="password" className="input-text" placeholder="****" />
                <Button variant="outlined">Login</Button>
            </div>
        </div>
    )
}

export default Login
