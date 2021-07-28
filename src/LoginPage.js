import React, { useState } from "react";
import FormInput from "./FormInput";
import "./styles.css";

const Button = (props) => (
  <button
    type={props.type}
    className={props.className}
    onClick={props.handleClick}
  >
    {props.label}
  </button>
);

const LoginPage = () => {
  const [userCren, setUserCren] = useState({ username: "", password: "" });
  const [errorData, setErrorData] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    setUserCren((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value
    }));
  }

  function onSubmit() {
    console.log(userCren);
    if (!userCren.username) {
      setErrorData((prevState) => ({
        ...prevState,
        username: "Enter your username!"
      }));
    }

    if (userCren.password.length < 8) {
      setErrorData((prevState) => ({
        ...prevState,
        password: "Password must be at least 8 characters!"
      }));
    }
    console.log(errorData);
    console.log(Object.getOwnPropertyNames(userCren).length);
    if (userCren.username !== "" && userCren.password.length > 8) {
      setSubmitted(true);
    }
  }

  return (
    <>
      {submitted ? (
        <p>Welcome onboard, {userCren.username}!</p>
      ) : (
        <>
          <h3>Login!</h3>
          <FormInput
            label="Username"
            name="username"
            type="text"
            value={userCren.username}
            onChange={handleChange}
            placeholder="Enter username..."
            error={errorData.username}
            required
            className="input"
          />
          <br></br>
          <br></br>
          <FormInput
            label="Password"
            name="password"
            type="password"
            value={userCren.password}
            onChange={handleChange}
            placeholder="Enter password..."
            error={errorData.password}
            className="input"
            required
          />
          <br></br>
          <br></br>
          <Button
            type="submit"
            label="Submit"
            className="button"
            handleClick={onSubmit}
          />
        </>
      )}
    </>
  );
};

export default LoginPage;
