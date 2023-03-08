import React, { useState } from 'react';
import Login from '../components/Login/Login';
import '../components/Login/Login.css';
import { Navigate } from 'react-router-dom';


// Material UI Components
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';


function Authenticate() {

    const [userName, setUserName] = useState(null)
    const [password, setPassword] = useState(null)
    const [logged, setLogged] = useState(false)
    const [open, setOpen] = useState(false);



    const validateUser = () => {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username:userName,password:password })
        };
        fetch('http://localhost:5000/api/users/auth', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if(data.is_error == 0){
                    setLogged(true)
                }else{
                    setOpen(true)
                }
            });
    }    

    if(logged === true){
        return <Navigate to="/home" />
    }

    const handleClose = () => {
    setOpen(false);
    };

    const action = (
        <React.Fragment>
          <Button color="secondary" size="small" onClick={handleClose}>
            Close
          </Button>
        </React.Fragment>
      );

    return (
        <div className="login">
            <div className="login__body">
                <input type="text" onChange={e => setUserName(e.target.value)} className="input-text" placeholder="Username" />
                <input type="password" onChange={e => setPassword(e.target.value)} className="input-text" placeholder="Pass****" />
                <Button variant="outlined" onClick={validateUser}>Login</Button>
            </div>
            <Snackbar
                open={open}
                autoHideDuration={10000}
                onClose={handleClose}
                message="Invalid user please try again.."
                action={action}
            />
        </div>
    )
}

export default Authenticate
