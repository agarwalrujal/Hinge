import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

const LoginButton = () => {
  const handleSuccess = (response) => {
    console.log('Login Success:', response);
    // Send response.tokenId to the backend for validation/authentication
  };

  const handleFailure = (error) => {
    console.log('Login Failed:', error);
  };

  return (
    <div>
      <h2>Login with Google</h2>
      <GoogleLogin
        
        onSuccess={handleSuccess}
        onError={handleFailure}
      />
    </div>
  );
};

export default LoginButton;
