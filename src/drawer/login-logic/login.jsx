import React, { useState, useEffect } from "react";
import { useSignInStyles } from "./login.styles";
import Button from "@material-ui/core/Button";
import { validateEmail } from "../../validators/validate-email";
import { validatePassword } from "../../validators/validate-password";

import {
  FilledInput,
  FormControl,
  InputLabel,
  TextField,
} from "@material-ui/core";

const Login = () => {
  const classes = useSignInStyles();
  const [values, setValues] = useState({
    loginEmail: "",
    loginPassword: "",
    registerEmail: "",
    registerPassword: "",
    registerConfirmPassword: "",
  });

  //   const [notifications, setNotification] = useState({
  //     wrongEmail: false,
  //     wrongPassword: false,
  //     passwordsDontMatch: false,
  //     emailExists: false,
  //     userRegistered: false,
  //     internalBackendError: false,
  //   });

  const validateAndLogin = () => {
    // let newNotification = {
    //   ...notifications,
    // };
    // if (!validateEmail(values.email)) {
    //   newNotification = { ...newNotification, wrongEmail: true };
    // }
    // if (values.username.length < 3) {
    //   newNotification = { ...newNotification, usernameTooShort: true };
    // }
    // if (values.username.length > 18) {
    //   newNotification = { ...newNotification, usernameTooLong: true };
    // }
    // if (!validatePassword(values.password)) {
    //   newNotification = { ...newNotification, wrongPassword: true };
    // }
    // if (values.password !== values.confirmPassword) {
    //   newNotification = { ...newNotification, passwordsDontMatch: true };
    // }
    // setNotification(newNotification);
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmitLogin = () => {
    setValues({
      loginEmail: "",
      loginPassword: "",
      registerEmail: "",
      registerPassword: "",
      registerConfirmPassword: "",
    });
  };

  const handleSubmitRegister = () => {
    setValues({
      loginEmail: "",
      loginPassword: "",
      registerEmail: "",
      registerPassword: "",
      registerConfirmPassword: "",
    });
  };

  return (
    <div className={classes.form}>
      <h1 className={classes.loginHeader}>Login</h1>
      <TextField
        value={values.loginEmail}
        className={classes.textfield}
        onChange={handleChange("loginEmail")}
        type="email"
        name="Email"
        label="Email"
        variant="filled"
      />
      <FormControl className={classes.textfield} variant="filled">
        <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
        <FilledInput
          className={classes.textfield}
          variant="filled"
          id="filled-adornment-password-login"
          type={"password"}
          value={values.loginPassword}
          onChange={handleChange("loginPassword")}
        />
      </FormControl>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Button
          className={classes.submitButton}
          variant="contained"
          size="medium"
          onClick={handleSubmitLogin}
        >
          Submit
        </Button>
      </div>
      <h1 className={classes.loginHeader} style={{ fontFamily: "Fredoka One" }}>
        Create New Account
      </h1>
      <div className={classes.form}>
        <TextField
          value={values.registerEmail}
          className={classes.textfield}
          onChange={handleChange("registerEmail")}
          className={classes.textfield}
          type="email"
          name="Email"
          label="Email"
          variant="filled"
        />
        <FormControl className={classes.textfield} variant="filled">
          <InputLabel>Password</InputLabel>
          <FilledInput
            className={classes.textfield}
            id="filled-adornment-password-register"
            type={"password"}
            value={values.registerPassword}
            onChange={handleChange("registerPassword")}
          />
        </FormControl>
        <FormControl className={classes.textfield} variant="filled">
          <InputLabel>Confirm Password</InputLabel>
          <FilledInput
            className={classes.textfield}
            id="filled-adornment-password-confirm"
            type={"password"}
            value={values.registerConfirmPassword}
            onChange={handleChange("registerConfirmPassword")}
          />
        </FormControl>
      </div>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Button
          className={classes.submitButton}
          variant="contained"
          size="medium"
          onClick={handleSubmitRegister}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Login;
