// Best practice would be to have one component, rather than a 'Login' component and a 'Registration' component, seeing as they do basically the same thing
// However, for illustrative purposes, they're separated into separate components here

import { useState } from 'react';
import axios from 'axios';

const Login = props => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredPasswordConfirmation, setEnteredPasswordConfirmation] = useState('');
  const [loginErrors, setLoginErrors] = useState('');

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
        'http://localhost:3001/sessions',
        {
          user: {
            email: enteredEmail,
            password: enteredPassword,
          },
        },
        { withCredentials: true } // This is what tells the API that it is ok to set the cookie in the client
      )
      .then(response => {
        console.log('🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕');
        console.log(response);
        if (response.data.logged_in) {
          props.handleSuccessfulAuth(response.data);
        } else {
          // Do something here
        }
      })
      .catch(error => {
        console.log('🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮');
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
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default Login;
