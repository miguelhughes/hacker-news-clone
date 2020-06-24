import React from "react";
import logoUrl from "./y18.gif";
import PropTypes from "prop-types";

const Logo = () => (
  <img className="logo" src={logoUrl} alt="y combinator logo"></img>
);
const Header = () => {
  return (
    <div className="header">
      <Logo />
      <span className="nav">
        <span className="heading">Hacker News</span>
        <Menu>
          <a href="/new">new</a>
          <a href="/past">past</a>
          <a href="/comments">comments</a>
          <a href="/ask">ask</a>
          <a href="/show">show</a>
          <a href="/jobs">jobs</a>
          <a href="/submit">submit</a>
        </Menu>
      </span>
      <Login />
    </div>
  );
};
const Menu = ({ children }) => {
  return <span className="menu">{children}</span>;
};
Menu.propTypes = {
  children: PropTypes.node,
};
const Login = () => <span className="login">login</span>;
export default Header;
