import React, { useState } from 'react';
import Field from '../components/Field';

const Register = () => {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const [state, setState] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    const { name, email, password } = state;
    e.preventDefault();
    console.table({ name, email, password });
  };

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  }

  const registerForm = () => {
    return <form onSubmit={handleSubmit} className='mt-3'>
      <Field type_label='name' text_label='Your Name' type='text' id='name' name='name' placeholder='Enter name' value={state.name} handleChange={handleChange}  />
      <Field type_label='email' text_label='Your Email' type='email' id='email' name='email' placeholder='Enter email' value={state.email} handleChange={handleChange}  />
      <Field type_label='password' text_label='Your Password' type='password' id='password' name='password' placeholder='Enter password' value={state.password} handleChange={handleChange}  />

      {/* <div className="form-group mb-3">
        <label htmlFor="name" className='form-label'>Your Name</label>
        <input type="text" id='name' name='name' className='form-control' placeholder='Enter name' value={state.name} onChange={handleChange} />
      </div> */}

      <button className='btn btn-primary'>Registration</button>
    </form>;
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
  )
}

export default Register