import React, { useState } from 'react';
import axios from 'axios';

const SignupForm = () => {
  const [employee, setEmployee] = useState({
    empName: '',
    empEmailId: '',
    empPassword: ''
  });

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/employees/signup', employee);
      alert("Signup successful");
    } catch (error) {
      alert("Signup failed. Check console.");
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <h3 className="text-center mb-3">Signup</h3>
      <div className="form-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          value={employee.empName}
          onChange={(e) => setEmployee({ ...employee, empName: e.target.value })}
          required
        />
      </div>
      <div className="form-group mb-3">
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          value={employee.empEmailId}
          onChange={(e) => setEmployee({ ...employee, empEmailId: e.target.value })}
          required
        />
      </div>
      <div className="form-group mb-3">
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          value={employee.empPassword}
          onChange={(e) => setEmployee({ ...employee, empPassword: e.target.value })}
          required
        />
      </div>
      <button type="submit" className="btn btn-success w-100">Signup</button>
    </form>
  );
};

export default SignupForm;
