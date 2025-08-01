import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [empEmailId, setEmpEmailId] = useState('');
  const [empPassword, setEmpPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:8080/employees/signin/${empEmailId}/${empPassword}`);
      if (response.data) {
        navigate('/success');
      } else {
        alert("Invalid email or password");
      }
    } catch (err) {
      console.error(err);
      alert("Login failed");
    }
  };

  return (
    <form onSubmit={handleLogin} className="p-4 border justify-content-center align-items-center rounded shadow">
      <h3 className="text-center mb-3">Login</h3>
      <div className="mb-3">
        <input type="email" className="form-control" placeholder="Email" onChange={(e) => setEmpEmailId(e.target.value)} required />
      </div>
      <div className="mb-3">
        <input type="password" className="form-control" placeholder="Password" onChange={(e) => setEmpPassword(e.target.value)} required />
      </div>
      <button type="submit" className="btn btn-primary w-100">Login</button>
    </form>
  );
};

export default LoginForm;
