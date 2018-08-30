import axios from 'axios';
import React from 'react';
import { withRouter } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';

import LoginButton from './LoginButton';
import LoginMenu from './LoginMenu';

import { update } from '../services/withUser';

const Navbar = (props) => {
  const { user } = props;
  const username = user ? user.username : null;
  const handleLogIn = () => {
    props.history.push('/login');
  };
  const handleLogOut = () => {
    axios.delete('/api/auth')
      .then(() => {
        update(null);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <AppBar
      className="appBar"
      style={{ backgroundColor: 'black' }}
      title={
      <div className="text-effect">
        <div className="navTitle" data-text="Electric Buddha">Electric Buddha</div>
        <div className="gradient"></div>
        <div className="spotlight"></div>
      </div>
    }
      showMenuIconButton={false}
      iconElementRight={user ?
        <LoginMenu username={username} onLogOut={handleLogOut} />
        : <LoginButton onClick={handleLogIn} />}
    />
  )
};

export default withRouter(Navbar);
