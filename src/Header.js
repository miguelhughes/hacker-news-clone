import React from "react";
import logoUrl from "./y18.gif";

const Logo = () => <img className="logo" src={logoUrl}></img>;
const Header = () => {
  return (
    <div className="header">
      <Logo />
      <span className="nav">
        <span className="heading">Hacker News</span>
        <Menu>
          <a href="#">new</a>
          <a href="#">past</a>
          <a href="#">comments</a>
          <a href="#">ask</a>
          <a href="#">show</a>
          <a href="#">jobs</a>
          <a href="#">submit</a>
        </Menu>
      </span>
      <Login />
    </div>
  );
};

const Menu = ({ children }) => {
  let separatedChildren = [];
  const sep = <span className="separator" />;
  React.Children.forEach(children, (c, i) => {
    if (i > 0) separatedChildren.push(sep);
    separatedChildren.push(c);
  });
  return <span className="menu">{separatedChildren}</span>;
};

const Login = () => <span className="login">login</span>;
export default Header;
