import { FastForward } from "@material-ui/icons";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Banner from 'react-js-banner';
const UserForm = (props) => {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
    cpassword: "",
    error_username: "",
    error_email: "",
    error_city: "",
    error_phone: "",
    error_password: "",
    error_cpassword: "",
    valid: true,
    error: ""
  });

  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (
      useState.error_username.length === 0 &&
      useState.error_email.length === 0 &&
      useState.error_phone.length === 0 &&
      useState.error_password.length ===0
    ) {
      props.history.push({
        pathname: "/details",
        state
      });
    } else {
      alert("Form Filled incorrectly");
    }
  };
  let validEmailRegex = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
  let pwd = "";
  let cpwd = "";
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "username":
        useState.error_username =
          value.length < 5 ? "User Name should be greaterthan 5 letters" : "";
        console.log(useState.error_username);
        console.log("Uname" + useState.valid);
        break;
      case "email":
        let eerr = value.match(validEmailRegex);
        useState.error_email = eerr ? "" : "Invalid Email";
        console.log(useState.error_email);
        console.log("Email" + useState.valid);
        break;
      case "password":
        pwd = value;
        console.log(pwd);
        useState.password=value
        break;
      case "cpassword":
        cpwd = value;
        console.log("My PWD"+useState.password);
        useState.error_password = value !== useState.password ? "Password Mismatch" : "";
        //console.log("Pass" + useState.valid);
        console.log(useState.error_password);
        console.log("Passwords");
        console.log(pwd);
        console.log(cpwd);
        /*if (pwd === cpwd) {
          useState.error_password = "";
        } else {
          useState.error_password = "Mismatch Password";
        }*/
        break;
      case "phone":
        useState.error_phone =
          value.length < 10 ? "Phone number must be 10 digits" : "";
        console.log(useState.error_phone);
        console.log("Phone" + useState.valid);
        break;
      default:
        break;
    }
    useState.error =
      useState.error_email +
      " \n " +
      useState.error_password +
      "  " +
      useState.error_phone +
      "  " +
      useState.error_username;
    setState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };
  const mystyle = {
    color: "brown",
    padding: "50px",
    fontFamily: "Arial",
    backgroundImage: "url(bg1.jpg)",
    backgroundRepeat: "no repeat"
  };
  return (
    <div style={mystyle}>
       <Banner>
   <h2>E Learning Website</h2>
   </Banner>
      <h1>Sign Up Form</h1>
      <Form.Group controlId="email">
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          onChange={handleInputChange}
          required
        />
      </Form.Group>
      <div>
        <p style={{ color: "red", fontFamily: "Arial" }}>
          {useState.error_email}
        </p>
      </div>
      <Form className="register-form" onSubmit={handleOnSubmit}>
        <Form.Group controlId="username">
          <Form.Control
            type="text"
            placeholder="Enter username"
            name="username"
            onInput={handleInputChange}
            required
          />
        </Form.Group>
        <div>
          <p style={{ color: "red", fontFamily: "Arial" }}>
            {useState.error_username}
          </p>
        </div>

        <Form.Group controlId="phone">
          <Form.Control
            type="number"
            placeholder="Enter Mobile Number"
            name="phone"
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <div>
          <p style={{ color: "red", fontFamily: "Arial" }}>
            {useState.error_phone}
          </p>
        </div>
        <Form.Group controlId="password">
          <Form.Control
            type="password"
            placeholder="Enter Your Password"
            name="password"
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="cpassword">
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            name="cpassword"
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <div>
          <p style={{ color: "red", fontFamily: "Arial" }}>
            {useState.error_password}
          </p>
        </div>
        <Button variant="primary" type="submit">
          Register
        </Button>
        {"   "}
        <Button variant="primary" type="reset">
          Reset
        </Button>
        <h4>
          Already a User{"   "}
          <NavLink to="/" activeClassName="active">
            Sign In
          </NavLink>
        </h4>
      </Form>
    </div>
  );
};

export default UserForm;
