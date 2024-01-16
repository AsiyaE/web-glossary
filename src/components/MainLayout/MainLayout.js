import React from 'react';
import { Outlet } from 'react-router-dom';


const MainLayout = () => {
  return (
    <div className="wrapper">
      <div > Практическое задание. Ермолаева А.А.</div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;