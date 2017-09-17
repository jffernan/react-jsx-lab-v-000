import React from 'react';

class RegistrationForm extends React.Component {
  render() {
    return (
      <form>
      <label>Username</label>
      <input type="text" />
      <label>Password</label>
      <input type="password" />
      </form>
    );
  }
}

export default RegistrationForm;
