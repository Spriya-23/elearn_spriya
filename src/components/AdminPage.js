import React, { Component } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Banner from "react-js-banner";
import { NavLink } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { Form, Button } from "react-bootstrap";
const styleTable = {
  fontfamily: "sans-serif",
  bordercollapse: "collapse",
  width: "100%"
};
const styleThTd = {
  border: "1px solid #dddddd",
  textalign: "left",
  padding: "8px"
};
class AdminPage extends Component {
  render() {
    return (
      <div>
        <Banner>
          <h2>
            E Learning Website
            <br />
            Admin Page{" "}
          </h2>
          {"     "}
          <Banner>
            <NavLink to="/details" activeClassName="active">
              <h4> Home</h4>
            </NavLink>{" "}
          </Banner>
          <Banner>
            <NavLink to="/" activeClassName="active">
              <h4> Logout</h4>
            </NavLink>
          </Banner>
        </Banner>
        <br />
        <br />
        <Grid container spacing={2}>
          <Grid container item xs={10} spacing={2}>
            <h3>User Details</h3>
            <table style={styleTable}>
              <tr style={styleThTd}>
                <th style={styleThTd}>S No</th>
                <th style={styleThTd}>Name</th>
                <th style={styleThTd}>Email</th>
                <th style={styleThTd}>Option</th>
              </tr>
              <tr style={styleThTd}>
                <td style={styleThTd}>1</td>
                <td style={styleThTd}>Alfreds Futterkiste</td>
                <td style={styleThTd}>Alfreds@example.com</td>
                <td style={styleThTd}>
                  <DeleteIcon />
                  <EditIcon />
                </td>
              </tr>
              <tr style={styleThTd}>
                <td style={styleThTd}>2</td>
                <td style={styleThTd}>Moctezuma</td>
                <td style={styleThTd}>Moctezuma@example.com</td>
                <td style={styleThTd}>
                  <DeleteIcon />
                  <EditIcon />
                </td>
              </tr>
              <tr style={styleThTd}>
                <td style={styleThTd}>3</td>
                <td style={styleThTd}>Moctezuma</td>
                <td style={styleThTd}>Moctezuma@example.com</td>
                <td style={styleThTd}>
                  <DeleteIcon />
                  <EditIcon />
                </td>
              </tr>
              <tr style={styleThTd}>
                <td style={styleThTd}>4</td>
                <td style={styleThTd}>Moctezuma</td>
                <td style={styleThTd}>Moctezuma@example.com</td>
                <td style={styleThTd}>
                  <DeleteIcon />
                  <EditIcon />
                </td>
              </tr>
              <tr style={styleThTd}>
                <td style={styleThTd}>5</td>
                <td style={styleThTd}>Moctezuma</td>
                <td style={styleThTd}>Moctezuma@example.com</td>
                <td style={styleThTd}>
                  <DeleteIcon />
                  <EditIcon />
                </td>
              </tr>
              <tr style={styleThTd}>
                <td style={styleThTd}>6</td>
                <td style={styleThTd}>Moctezuma</td>
                <td style={styleThTd}>Moctezuma@example.com</td>
                <td style={styleThTd}>
                  <DeleteIcon />
                  <EditIcon />
                </td>
              </tr>
            </table>
          </Grid>
          <Grid container item xs={10} spacing={2}>
            <Form className="register-form">
              <Form.Group controlId="username">
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  name="username"
                  required
                />
              </Form.Group>

              <Form.Group controlId="phone">
                <Form.Control
                  type="number"
                  placeholder="Enter Mobile Number"
                  name="phone"
                  required
                />
              </Form.Group>

              <Form.Group controlId="password">
                <Form.Control
                  type="password"
                  placeholder="Enter EMail"
                  name="password"
                  required
                />
              </Form.Group>
              <Form.Group controlId="cpassword">
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  name="cpassword"
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Update
              </Button>
            </Form>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default AdminPage;
