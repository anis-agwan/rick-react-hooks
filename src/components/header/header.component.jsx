import React, { Component } from "react";

import { NavLink } from "react-router-dom";

import "./header.css";

class Header extends Component {
  links = [
    <NavLink activeClassName="is-active" exact to="/">Home</NavLink>,
    <NavLink activeClassName="is-active" to="/episode/">Episodes</NavLink>,
  ];

  render() {
    return (
      <header className="header">
        <nav>
          <ul className="nav-list">
            {this.links.map((link, i) => (
              <li className="nav-list-item" key={i}>
                {link}
              </li>
            ))}
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;