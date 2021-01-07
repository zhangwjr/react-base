import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

// children
function ListItemLink({ to, name, ...res }) {
  console.log(to,name,res);
  return (
    <Route
      path={to}
      children={({ match }) => (
        <li>
          <Link to={to} {...res}>
            {name}     
          </Link>
        </li>
      )}
    />
  );
}
export default class RouteChildren extends Component {
  render() {
    return (
      <div>
        <h3>RouteChildren</h3>
        <Router>
          <ul>
            <ListItemLink to="/somewhere" name="链接1" />
            <ListItemLink to="/somewhere-else" name="链接2" />
          </ul>
        </Router>
      </div>
    );
  }
}
