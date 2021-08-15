import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Details from "../components/Details";
import UserForm from "../components/UserForm";
import LoginForm from "../components/LoginForm";
import ChatBot from "../components/ChatBot";
import AdminPage from "../components/AdminPage";

const AppRouter = () => (
  <BrowserRouter>
    <div className="container">
      <Switch>
        <Route component={LoginForm} path="/" exact={true} />
        <Route component={Details} path="/details" />
        <Route component={UserForm} path="/signup" />
        <Route component={ChatBot} path="/chatbot" />
        <Route component={AdminPage} path="/admin" />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
