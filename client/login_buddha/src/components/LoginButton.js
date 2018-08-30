import React from 'react';
import FlatButton from 'material-ui/FlatButton';

const LoginButton = (props) => (
  <FlatButton
    className="flatButton"
    label="Log In" onClick={props.onClick} 
    style={{backgroundColor: 'magenta', color: 'purple'}} 
  />
);

export default LoginButton;
