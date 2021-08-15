import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Card, CardText, CardBody } from "reactstrap";
import Grid from "@material-ui/core/Grid";
import Banner from "react-js-banner";
const Details = (props) => {
  const [state, setState] = useState({ course: "" });

  const { username, email, city, phone } =
    (props.location && props.location.state) || {};

  const handleClick = (event) => {
    setState({ course: "Angular" });
    props.history.push({
      pathname: "/chatbot",
      state
    });
  };

  return (
    <div>
      <div className="form-details">
        <Banner>
          <h2>E Learning Website</h2>
          {"     "}
          <Banner>
            <NavLink to="/" activeClassName="active">
              Logout
            </NavLink>
          </Banner>
        </Banner>
        <Card>
          <CardBody>
            <CardText>Welcome : {username}</CardText>
            <CardText>Your registered Email is : {email}</CardText>
          </CardBody>
        </Card>
        <br />
        <br />
        <center>
          <input type="text" />
          {"      "}
          <button>Search</button>
        </center>{" "}
        <br />
        <br />
        <Grid container spacing={8}>
          <Grid container item xs={6} spacing={8}>
            <NavLink
              to="/chatbot"
              activeClassName="active"
              onClick={handleClick}
            >
              <h4>Angular Course </h4>
            </NavLink>
            <br />
            <img src="angular.jpg" alt="Angular" width="193" height="130" />
          </Grid>
          <Grid container item xs={6} spacing={8}>
            <NavLink to="/chatbot" activeClassName="active">
              <h4>React Course </h4>
            </NavLink>
            <br />
            <img src="react.jpg" alt="Angular" width="193" height="130" />
          </Grid>
          <Grid container item xs={6} spacing={8}>
            <NavLink to="/chatbot" activeClassName="active">
              <h4>Node Course </h4>
            </NavLink>
            <br />
            <img src="node.jpg" alt="Angular" width="193" height="130" />
          </Grid>
          <Grid container item xs={6} spacing={8}>
            <NavLink to="/chatbot" activeClassName="active">
              <h4>Mongo DB </h4>
            </NavLink>
            <br />
            <img src="mongo.jpg" alt="Angular" width="193" height="130" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Details;
