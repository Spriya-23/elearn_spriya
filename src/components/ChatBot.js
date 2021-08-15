import React, { Component } from "react";
import PropTypes from "prop-types";
import ChatBot from "react-simple-chatbot";
import { NavLink } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Banner from "react-js-banner";
import ReactPDF from "react-pdf";
import PDFViewer from "pdf-viewer-reactjs";
class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      gender: "",
      age: ""
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { name, gender, age } = steps;

    this.setState({ name, gender, age });
  }

  render() {
    const { name, gender, age } = this.state;
    return (
      <div style={{ width: "100%" }}>
        <h3>Summary</h3>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{name.value}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>{gender.value}</td>
            </tr>
            <tr>
              <td>Age</td>
              <td>{age.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

Review.propTypes = {
  steps: PropTypes.object
};

Review.defaultProps = {
  steps: undefined
};

class SimpleForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      gender: "",
      age: ""
    };
    const { course } = (props.location && props.location.state) || {};
  }

  render() {
    //const { name1, gender1, age1 } = this.state;

    return (
      <div>
        <Banner>
          <h2>E Learning Website</h2>
          {"     "}
          <Banner>
            <NavLink to="/" activeClassName="active">
              Logout
            </NavLink>
          </Banner>
        </Banner>
        <br />
        <br />
        <br />
        <Grid container spacing={8}>
          <Grid container item xs={6} spacing={8}>
            <h4>
              Refer Links for the Chosen Course
              <br />
              <iframe
                src="https://www.youtube.com/embed/E7wJTI-1dvQ"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
                title="video"
              />
              <NavLink to="/admin" activeClassName="active">
                <h3>Admin Page</h3>
              </NavLink>
              <br />
            </h4>
          </Grid>
          <Grid container item xs={6} spacing={8}>
            <h4>Give Your Details to the CHATBOT </h4>
            <ChatBot
              steps={[
                {
                  id: "1",
                  message: "What is your name?",
                  trigger: "name"
                },
                {
                  id: "name",
                  user: true,
                  trigger: "3"
                },
                {
                  id: "3",
                  message: "Hi {previousValue}! What is your gender?",
                  trigger: "gender"
                },
                {
                  id: "gender",
                  options: [
                    { value: "male", label: "Male", trigger: "5" },
                    { value: "female", label: "Female", trigger: "5" }
                  ]
                },
                {
                  id: "5",
                  message: "How old are you?",
                  trigger: "age"
                },
                {
                  id: "age",
                  user: true,
                  trigger: "7",
                  validator: (value) => {
                    if (isNaN(value)) {
                      return "value must be a number";
                    } else if (value < 0) {
                      return "value must be positive";
                    } else if (value > 120) {
                      return `${value}? Come on!`;
                    }

                    return true;
                  }
                },
                {
                  id: "7",
                  message: "Great! Check out your summary",
                  trigger: "review"
                },
                {
                  id: "review",
                  component: <Review />,
                  asMessage: true,
                  trigger: "update"
                },
                {
                  id: "update",
                  message: "Would you like to update some field?",
                  trigger: "update-question"
                },
                {
                  id: "update-question",
                  options: [
                    { value: "yes", label: "Yes", trigger: "update-yes" },
                    { value: "no", label: "No", trigger: "end-message" }
                  ]
                },
                {
                  id: "update-yes",
                  message: "What field would you like to update?",
                  trigger: "update-fields"
                },
                {
                  id: "update-fields",
                  options: [
                    { value: "name", label: "Name", trigger: "update-name" },
                    {
                      value: "gender",
                      label: "Gender",
                      trigger: "update-gender"
                    },
                    { value: "age", label: "Age", trigger: "update-age" }
                  ]
                },
                {
                  id: "update-name",
                  update: "name",
                  trigger: "7"
                },
                {
                  id: "update-gender",
                  update: "gender",
                  trigger: "7"
                },
                {
                  id: "update-age",
                  update: "age",
                  trigger: "7"
                },
                {
                  id: "end-message",
                  message: "Thanks! Your data was submitted successfully!",
                  end: true
                }
              ]}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default SimpleForm;
