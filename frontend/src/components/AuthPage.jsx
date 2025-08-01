import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import 'bootstrap/dist/css/bootstrap.min.css';

const AuthPage = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center bg-light">
      <div className="card p-4 shadow-lg" style={{ width: '100%', maxWidth: '400px' }}>
        {showLogin ? <LoginForm /> : <SignupForm />}

        <div className="text-center mt-3">
          {showLogin ? (
            <>
              <p>Don’t have an account?</p>
              <button className="btn btn-outline-primary" onClick={() => setShowLogin(false)}>Signup</button>
            </>
          ) : (
            <>
              <p>Already have an account?</p>
              <button className="btn btn-outline-secondary" onClick={() => setShowLogin(true)}>Login</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
