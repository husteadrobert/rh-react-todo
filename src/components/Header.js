import React from 'react';

const Header = (props) => (
  <div className="header">
    <div className="container">
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  </div>
);

Header.defaultProps = {
  title: "This is a basic Todo App written in React"
};

export default Header;
