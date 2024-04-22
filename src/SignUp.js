import React, { useState } from 'react';
import { signUp } from "./components/services/user_service";

function SignUp() {
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

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    SignUp(signupData).then((resp)=>{
      console.log(resp)
      console.log("success log")

    }).catch((error)=>{
      console.log(error)
      console.log("error log")
    })
    // Perform signup logic here (e.g., API call)
    console.log('Signing up with data:', signupData);
  };

  const handleSignUpClick = () => {
    // Call handleSignupSubmit when the button is clicked
    handleSignupSubmit();
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', borderRadius: '20px', backgroundColor: '#f0f0f0' }} onSubmit={handleSignupSubmit}>
      <p style={{ display: 'inline' }}>Sign Up</p>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={signupData.username}
          onChange={handleSignupChange}
          style={{ width: '100%', padding: '10px', margin: '10px 0', borderRadius: '20px', border: 'none', outline: 'none' }}
        />
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
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={signupData.confirmPassword}
          onChange={handleSignupChange}
          style={{ width: '100%', padding: '10px', margin: '10px 0', borderRadius: '20px', border: 'none', outline: 'none' }}
        />
        <button type="button" onClick={handleSignUpClick} style={{ width: '100%', padding: '10px', marginTop: '10px', borderRadius: '20px', border: 'none', backgroundColor: '#007bff', color: 'white', cursor: 'pointer' }}>Sign up</button>
      </form>
    </div>
  );
}

export default SignUp;
