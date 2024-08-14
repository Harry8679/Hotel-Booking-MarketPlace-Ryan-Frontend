import React, { useState } from 'react';
import Field from '../components/Field';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate(); // Hook pour la redirection

  const handleSubmit = async (e) => {
    const { name, email, password } = state;
    e.preventDefault();
    try {
      console.table({ name, email, password });
      const res = await axios.post(`http://localhost:5500/api/v1/register`, { name, email, password });

      setState({
        name: '',
        email: '',
        password: ''
      });
      console.log('REGISTER USER ===> ', res);
      toast.success('User registered successfully. Please login.');

      // Redirection après un délai pour afficher le toast
      setTimeout(() => {
        navigate('/login');
      }, 6000); // 6 secondes de délai avant la redirection

    } catch (err) {
      console.log(err);
      toast.error(err.response.data);
    }
  };

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  }

  const registerForm = () => {
    return (
      <form onSubmit={handleSubmit} className='mt-3'>
        <Field type_label='name' text_label='Your Name' type='text' id='name' name='name' placeholder='Enter name' value={state.name} handleChange={handleChange} />
        <Field type_label='email' text_label='Your Email' type='email' id='email' name='email' placeholder='Enter email' value={state.email} handleChange={handleChange} />
        <Field type_label='password' text_label='Your Password' type='password' id='password' name='password' placeholder='Enter password' value={state.password} handleChange={handleChange} />

        <button className='btn btn-primary'>Registration</button>
      </form>
    );
  };

  return (
    <>
      <div className='container-fluid bg-secondary p-5 text-center'>
        <h1>Register</h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            {registerForm()}
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
