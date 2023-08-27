import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from 'redux/auth/actions';

export const NavigationBar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOutUser());
  };
  const user = useSelector(state => {
    return state.auth.user;
  });
  return (
    <header>
      <nav style={{ display: 'flex', gap: '4px' }}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </nav>
      <div>
        <p>user: {user.email}</p>
        <button onClick={handleLogout}>Log out</button>
      </div>
    </header>
  );
};
