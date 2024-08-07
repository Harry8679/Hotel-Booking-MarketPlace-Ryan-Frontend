import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './booking/Home';
import Login from './auth/Login';
import Register from './auth/Register';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Login />} path='/login' />
        <Route element={<Register />} path='/register' />
      </Routes>
    </Router>
  );
}

export default App;
