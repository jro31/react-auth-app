import { useState } from 'react';
import axios from 'axios';

const Registration = props => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredPasswordConfirmation, setEnteredPasswordConfirmation] = useState('');
  const [registrationErrors, setRegistrationErrors] = useState('');

  const handleEmailInputChange = event => {
    setEnteredEmail(event.target.value);
  };

  const handlePasswordInputChange = event => {
    setEnteredPassword(event.target.value);
  };

  const handlePasswordConfirmationInputChange = event => {
    setEnteredPasswordConfirmation(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log('Form submitted');

    axios
      .post(
        'http://localhost:3001/registrations',
        {
          user: {
            email: enteredEmail,
            password: enteredPassword,
            password_confirmation: enteredPasswordConfirmation,
          },
        },
        { withCredentials: true } // This is what tells the API that it is ok to set the cookie in the client
      )
      .then(response => {
        console.log('🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈');
        console.log(response);
        if (response.data.status === 'created') {
          props.handleSuccessfulAuth(response.data);
        } else {
          // Do something here
        }
      })
      .catch(error => {
        console.log('🧅🧅🧅🧅🧅🧅🧅🧅🧅🧅🧅🧅🧅🧅🧅🧅🧅🧅🧅🧅🧅🧅🧅🧅🧅');
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          name='email'
          placeholder='Email'
          value={enteredEmail}
          onChange={handleEmailInputChange}
          required
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={enteredPassword}
          onChange={handlePasswordInputChange}
          required
        />
        <input
          type='password'
          name='password_confirmation'
          placeholder='Password confirmation'
          value={enteredPasswordConfirmation}
          onChange={handlePasswordConfirmationInputChange}
          required
        />
        <button type='submit'>Register</button>
      </form>
    </div>
  );
};

export default Registration;
