import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!email || !password) {
      setErrorMessage('Both fields are required');
      window.alert("Email and Password is required");
      return;
    }
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
    // Clear form
    setEmail('');
    setPassword('');
    setErrorMessage('');
  };
  return (
    <div>
        <div className='login-container'>
      <h2>Login</h2>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit">LOGIN</button>
      </form>
    </div>
    </div>
  );
}

export default Login;