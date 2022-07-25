import React, { Children, Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <CustomLink href="/">Live Data</CustomLink>
        <CustomLink href="/Reporting">Reporting</CustomLink>
      </div>
    );
  }
}

function CustomLink({ href, children, ...props }) {
  const path = window.location.pathname;
  if (path === href) {
  }
  return (
    <div className="navbar__div">
      <div
        className={
          path === href ? "navbar__div__active" : "navbar__div__inactive"
        }
      ></div>
      <a href={href} {...props} className="navbar__link">
        {children}
      </a>
    </div>
  );
}

export default Navbar;
