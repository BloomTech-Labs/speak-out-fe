import React from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
// import './UserSettings.scss';
import { PrimaryButton } from '../../../styles/BtnStyles.js';

const UserSettings = () => {
  const { url } = useRouteMatch();
  const history = useHistory();

  // Extracting User details from user's token
  const token = localStorage.getItem('token');
  const tokenData = JSON.parse(atob(token.split('.')[1]));
  console.log(tokenData);
  const { email, name } = tokenData;

  const handleSubmit = e => {
    e.preventDefault();
    history.push(`${url}/edit`);
  };

  return (
    <div className="settings-container">
      <h1>Review Settings</h1>
      <div className="input-group">
        <div className="input-row">
          <label>Full Name:</label>
          <p>{name}</p>
        </div>
        <div className="input-row">
          <label>Email:</label>
          <p>{email}</p>
        </div>
      </div>
      <PrimaryButton onClick={handleSubmit}>Edit</PrimaryButton>
    </div>
  );
};

export default UserSettings;
