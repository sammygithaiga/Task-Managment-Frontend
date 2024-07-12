import React from 'react';
import { Sidebar } from './Sidebar';
import '../styles/DashboardLayout.css';

export const DashboardLayout = ({ children }) => (
  <div className="layout-container">
    <Sidebar />
    <div className="content-container">
      {children}
    </div>
  </div>
);
