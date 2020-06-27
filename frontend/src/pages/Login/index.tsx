import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { IoIosClose } from 'react-icons/io';
import './styles.scss';

const Login: React.FC = () => {
  const history = useHistory();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    history.push('/');
  }

  return (
    <div className="Login">
      <form onSubmit={(e) => handleSubmit(e)}>
        <Link to="/">
          <IoIosClose />
        </Link>
        <label>User</label>
        <input type="text" placeholder="Enter your user..." />
        <label>Password</label>
        <input type="text" placeholder="Enter your password..." />
        <button type="submit" className="button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
