import React, { useState } from 'react';
import Field from '../components/Field';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [state, setState] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate(); // Hook pour la redirection

  const handleSubmit = async (e) => {
    const { email, password } = state;
    e.preventDefault();
    try {
      console.table({ email, password });
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/register`, { email, password });
      // const res = await axios.post(`${process.env.API_URL}/register`, { name, email, password });

      setState({
        email: '',
        password: ''
      });
      console.log('LOGIN USER ===> ', res);
      toast.success('Logged successfully !');

      // Redirection après un délai pour afficher le toast
      setTimeout(() => {
        navigate('/');
      }, 1000); // 6 secondes de délai avant la redirection

    } catch (err) {
      console.log(err);
      toast.error(err.response.data);
    }
  };

  // console.log(process.env.REACT_APP_API_URL);

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  }

  const loginForm = () => {
    return (
      <form onSubmit={handleSubmit} className='mt-3'>
        <Field type_label='email' text_label='Your Email' type='email' id='email' name='email' placeholder='Enter email' value={state.email} handleChange={handleChange} />
        <Field type_label='password' text_label='Your Password' type='password' id='password' name='password' placeholder='Enter password' value={state.password} handleChange={handleChange} />

        <button className='btn btn-primary' disabled={!state.email && !state.password}>Login</button>
      </form>
    );
  };

  return (
    <>
      <div className='container-fluid bg-secondary p-5 text-center'>
        <h1>Login</h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            {loginForm()}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
