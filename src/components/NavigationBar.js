import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export const NavigationBar = () => {
  const dispatch = useDispatch();

  //   const handleLogout = () => {
  //     dispatch(logOut());
  //   };
  return (
    <header>
      <nav style={{ display: 'flex', gap: '4px' }}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
        <button onClick={() => {}}>Log out</button>
      </nav>
    </header>
  );
};
