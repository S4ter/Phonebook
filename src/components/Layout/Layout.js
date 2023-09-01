import { Outlet } from 'react-router-dom';
import { NavigationBar } from '../navigationbar/NavigationBar';
import './Layout.styles.css';

export const Layout = () => {
  return (
    <div className="container">
      <NavigationBar />
      <Outlet />
    </div>
  );
};
