import React, { useState } from 'react';
import { signUp } from '../../components/services/user_service';

function Login() {
  const [signupData, setSignupData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData({
      ...signupData,
      [name]: value,
    });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', borderRadius: '20px', backgroundColor: '#f0f0f0' }} >
        <p style={{ display: 'inline' }}>Login</p>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={signupData.email}
          onChange={handleSignupChange}
          style={{ width: '100%', padding: '10px', margin: '10px 0', borderRadius: '20px', border: 'none', outline: 'none' }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={signupData.password}
          onChange={handleSignupChange}
          style={{ width: '100%', padding: '10px', margin: '10px 0', borderRadius: '20px', border: 'none', outline: 'none' }}
        />
        <button type="button" style={{ width: '100%', padding: '10px', marginTop: '10px', borderRadius: '20px', border: 'none', backgroundColor: '#007bff', color: 'white', cursor: 'pointer' }}>Login</button>
        <a href="#" style={{ marginTop: '10px', color: '#007bff', textDecoration: 'none' }}>Forgot Password?</a>
      </form>
    </div>
  );
}

export default Login;

