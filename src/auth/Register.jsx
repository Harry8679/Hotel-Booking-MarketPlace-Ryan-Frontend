import React, { useState } from 'react';

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
      <div className="form-group mb-3">
        <label htmlFor="name" className='form-label'>Your Name</label>
        <input type="text" id='name' name='name' className='form-control' placeholder='Enter name' value={state.name} onChange={handleChange} />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="email" className='form-label'>Your Email</label>
        <input type="email" id='email' name='email' className='form-control' placeholder='Enter email' onChange={handleChange} value={state.email} />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="password" className='form-label'>Your Password</label>
        <input type="password" id='password' name='password' className='form-control' placeholder='Enter password' onChange={handleChange} value={state.password} />
      </div>

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