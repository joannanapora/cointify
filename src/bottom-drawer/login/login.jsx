import React, { useState } from 'react';
import {useSignInStyles} from './login.styles';
import Button from '@material-ui/core/Button';
import {validateEmail} from '../../validators/validate-email';
import {validatePassword} from '../../validators/validate-password';


import { FilledInput, FormControl, InputLabel, TextField } from '@material-ui/core';

const Login = () => {
    const classes = useSignInStyles();
    const [values, setValues]= useState({
        loginEmail: '',
        loginPassword: '',
        registerEmail: '',
        registerPassword: '',
        registerConfirmPassword: '',
    });

    const [notifications, setNotification] = useState({
        wrongEmail: false,
        wrongPassword: false,
        passwordsDontMatch: false,
        usernameTooLong:false,
        usernameTooShort:false,
        usernameExists: false,
        emailExists: false,
        userRegistered: false,
        internalBackendError: false
    });


    const validateAndLogin = () => {
        
        let newNotification = {
            ...notifications
        }

        if (!validateEmail(values.email)) {
            newNotification = { ...newNotification,  wrongEmail: true};
        }
        if (values.username.length < 3) {
            newNotification = { ...newNotification,  usernameTooShort: true };
        }
        if (values.username.length > 18) {
            newNotification = { ...newNotification,  usernameTooLong: true };
        }

        if (!validatePassword(values.password)) {
            newNotification = { ...newNotification,  wrongPassword: true };
        }

        if (values.password !== values.confirmPassword) {
            newNotification = { ...newNotification,  passwordsDontMatch: true };     
        }

        setNotification(newNotification);

    }

    const clearAllInputs = () => {
        setValues({
            loginEmail: '',
            loginPassword: '',
            registerEmail: '',
            registerPassword: '',
            registerConfirmPassword: '',
        })
    }


    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleSubmit = (event) => {
    };

    const submitOnEnter = (event) => {
        if (event.key === "Enter") {
        }
    };
            
            return (
            <div >
                <h1 className={classes.loginHeader}>Login</h1>
            <div className={classes.form}>
            <TextField value={values.email}
                className={classes.textfield}
                onKeyDown={submitOnEnter}
                onChange={handleChange('loginEmail')}
                type='email'
                name='Email'
                label="Email"
                variant='filled' />
            <FormControl className={classes.textfield} variant='filled'>
                <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                <FilledInput
              className={classes.textfield}
                variant='filled'
                    onKeyDown={submitOnEnter}
                    id="filled-adornment-password"
                    type={'password'}
                    value={values.password}
                    onChange={handleChange('loginPassword')}
                />
            </FormControl>
        </div>
            <div style={{width:'100%', display: 'flex', justifyContent: 'center'}}>
            <Button className={classes.submitButton} variant="contained" size="medium" >
          Submit
        </Button>
            </div>
        <h1 className={classes.loginHeader} style={{ fontFamily: "Fredoka One" }} >Create New Account</h1>
        <div className={classes.form}>
            <TextField value={values.email}
          className={classes.textfield}
                onKeyDown={submitOnEnter}
                onChange={handleChange('registerEmail')}
                className={classes.textfield}
                type='email'
                name='Email'
                label="Email"
                variant='filled' />
            <FormControl className={classes.textfield} variant='filled'>
                <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                <FilledInput
              className={classes.textfield}
                    onKeyDown={submitOnEnter}
                    id="filled-adornment-password"
                    type={'password'}
                    value={values.password}
                    onChange={handleChange('registerPassword')}
                />
            </FormControl>
            <FormControl className={classes.textfield} variant='filled'>
                <InputLabel htmlFor="filled-adornment-password">Confirm Password</InputLabel>
                <FilledInput
              className={classes.textfield}
                    onKeyDown={submitOnEnter}
                    id="filled-adornment-password"
                    type={'password'}
                    value={values.confirmPassword}
                    onChange={handleChange('registerConfirmPassword')}
                />
            </FormControl>
        </div>
            <div style={{width:'100%', display: 'flex', justifyContent: 'center'}}>
            <Button className={classes.submitButton} variant="contained" size="medium" >
          Submit
        </Button>
            </div>
        </div>);

};



export default Login;