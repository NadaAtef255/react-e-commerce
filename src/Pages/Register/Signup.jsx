import React, { useContext, useState } from 'react';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useHistory } from 'react-router-dom';
import Joi from 'joi';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Signup.css';
import { UserContext } from "../../Context/UserContext";
import { ToastContainer, toast } from 'react-toastify';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fName, setFname] = useState('');
  const [lName, setLname] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const history = useHistory();

  const schema = Joi.object({
    email: Joi.string()
      .pattern(/^(?!.*([a-zA-Z])\1{2})[a-zA-Z]{5,15}[0-9]{0,2}@(gmail|yahoo)\.(com|net)$/)
      .message('Must be 5 letters before @ with valid domain like gmail.com or yahoo.com, and no more than 2 consecutive repeating letters.')
      .required(),
    fName: Joi.string()
      .pattern(/^[a-zA-Z]{3,9}$/)
      .message('First name must be between 3 and 9 letters long')
      .required(),
    lName: Joi.string()
      .pattern(/^[a-zA-Z]{3,9}$/)
      .message('Last name must be between 3 and 9 letters long')
      .required(),
    password: Joi.string()
      .min(6)
      .message('Password must be at least 6 characters long')
      .required(),
  });

  let { setUserData } = useContext(UserContext);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const { error } = schema.validate({ fName, lName, email, password });

    if (error) {
      setError(error.message);
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccess('Registration successful');
      history.push('/login');
      toast('Registration successful');
    } catch (error) {
      setError('Registration failed: ' + error.message);
    }
  };

  return (
    <div className='d-flex justify-content-center align-items-center vh-100 bg-light'>
      <div className="container bg-white p-4 rounded shadow-sm">
        <h1 className="text-center mb-4">Sign Up</h1>
        <form onSubmit={handleSignUp}>
          <div className="mb-3">
            <label htmlFor="fname" className="form-label">First Name</label>
            <input onChange={(e) => setFname(e.target.value)} required id="fname" type="text" value={fName} className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="lname" className="form-label">Last Name</label>
            <input onChange={(e) => setLname(e.target.value)} required id="lname" type="text" value={lName} className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input onChange={(e) => setEmail(e.target.value)} required id="email" type="email" value={email} className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input onChange={(e) => setPassword(e.target.value)} required id="password" type="password" value={password} className="form-control" />
          </div>
          <button type="submit" className="btn-color w-100">
          Sign Up
        </button>
        </form>
        {error && <div className="alert alert-danger mt-3">{error}</div>}
        {success && <div className="alert alert-success mt-3">{success}</div>}
      </div>
    </div>
  );
}
