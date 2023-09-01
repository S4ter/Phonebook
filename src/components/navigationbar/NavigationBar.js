import { NavLink } from 'react-router-dom';

import './NavigationBar.styles.css';
import { UserInfo } from '../userinfo/UserInfo';
export const NavigationBar = () => {
  return (
    <header className="layout_container">
      <div className="layout_header">Your Own Phonebook</div>
      <nav className="nav_containter">
        <div className="nav_menu">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/contacts">Contacts</NavLink>
        </div>
        <div className="nav_menu">
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
        </div>
      </nav>
      <UserInfo />
    </header>
  );
};
