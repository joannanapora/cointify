import React, { useState } from 'react';
import {useSignInStyles} from './login.styles';
import Button from '@material-ui/core/Button';


import { FilledInput, FormControl, InputLabel, TextField } from '@material-ui/core';

const Login = () => {
    const classes = useSignInStyles();
    const [values, setValues]= useState({
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState({
        wrongEmailPassword: false,
        internalBackendError: false,
    });


    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        setErrors({
            wrongEmailPassword: false,
            internalBackendError: false,
        });
    };

    const handleSubmit = (event) => {
    };

    const submitOnEnter = (event) => {
        if (event.key === "Enter") {
        }
    };
            
            return (
            <div >
                <h1 className={classes.loginHeader} style={{ fontFamily: "Fredoka One" }} >Login</h1>
            <div className={classes.form}>
            <TextField value={values.email}
                onKeyDown={submitOnEnter}
                onChange={handleChange('email')}
                className={classes.textfield}
                type='email'
                name='Email'
                label="Email"
                variant="outlined" />
                 <TextField value={values.email}
                onKeyDown={submitOnEnter}
                onChange={handleChange('password')}
                className={classes.textfield}
                type='password'
                name='Password'
                label="Password"
                variant="outlined" />
        </div>
            <div style={{width:'100%', display: 'flex', justifyContent: 'center'}}>
            <Button className={classes.submitButton} variant="contained" size="small" >
          Submit
        </Button>
            </div>
        <h1 className={classes.loginHeader} style={{ fontFamily: "Fredoka One" }} >Create New Account</h1>
        <div className={classes.form}>
            <TextField value={values.email}
                onKeyDown={submitOnEnter}
                onChange={handleChange('email')}
                className={classes.textfield}
                type='email'
                name='Email'
                label="Email"
                variant="outlined" />
              <TextField value={values.email}
                onKeyDown={submitOnEnter}
                onChange={handleChange('password')}
                className={classes.textfield}
                type='password'
                name='Password'
                label="Password"
                variant="outlined" />
            <TextField value={values.email}
                onKeyDown={submitOnEnter}
                onChange={handleChange('confirmPassword')}
                className={classes.textfield}
                type='password'
                name='confirmPassword'
                label="Confirm Password"
                variant="outlined" />
        </div>
            <div style={{width:'100%', display: 'flex', justifyContent: 'center'}}>
            <Button className={classes.submitButton} variant="contained" size="small" >
          Submit
        </Button>
            </div>
        </div>);

};



export default Login;