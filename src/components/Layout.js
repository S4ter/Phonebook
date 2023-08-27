import { Outlet } from 'react-router-dom';
import { NavigationBar } from './NavigationBar';

export const Layout = () => {
  return (
    <div>
      <NavigationBar />
      <Outlet />
    </div>
  );
};
