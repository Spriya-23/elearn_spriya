import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Banner from "react-js-banner";
const LoginForm = (props) => {
  const [state, setState] = useState({
    username: "",
    email: "abc@gmail.com",
    city: "",
    phone: "",
    error_uemail: ""
  });

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (useState.error_uemail.length === 0) {
      props.history.push({
        pathname: "/details",
        state
      });
    } else {
      alert("Enter Correct Email");
    }
  };
  let validEmailRegex = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    let eerr = value.match(validEmailRegex);
    switch (name) {
      case "username":
        eerr = value.match(validEmailRegex);
        useState.error_uemail = eerr ? "" : "Invalid Email";
        console.log(useState.error_uemail);
        break;
      default:
    }

    setState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const mystyle = {
    color: "brown",
    padding: "50px",
    fontFamily: "Arial",

    backgroundRepeat: "no repeat"
  };
  const btnstyle = {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  };

  return (
    <div style={mystyle}>
      <Banner>
        <h2>E Learning Website</h2>
      </Banner>
      <h3>Log In </h3>
      <Form className="register-form" onSubmit={handleOnSubmit}>
        <Form.Group controlId="username">
          <Form.Control
            type="text"
            placeholder="Enter Email"
            name="username"
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <div>
          <p style={{ color: "red", fontFamily: "Arial" }}>
            {useState.error_uemail}
          </p>
        </div>

        <Form.Group controlId="phone">
          <Form.Control
            type="password"
            placeholder="Enter password"
            name="phone"
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <view style={btnstyle}>
          <Button variant="primary" type="submit">
            Login
          </Button>
          {"                   "}
          {"                   "}
          <Button variant="primary" type="reset">
            Cancel
          </Button>
        </view>
        <br></br>
        <br></br>

        <h4>
          New User{" "}
          <NavLink to="/signup" activeClassName="active">
            Sign Up
          </NavLink>
        </h4>
        <img src="bg.jpg" alt="WelcomePic" />
        <br></br>
        <br></br>
      </Form>
    </div>
  );
};

export default LoginForm;
