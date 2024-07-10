import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ onHideSidebar }) => (
    <Nav className="flex-column">
        <NavLink to="/" className="nav-link" onClick={onHideSidebar}>Home</NavLink>
        <NavLink to="/tasks" className="nav-link" onClick={onHideSidebar}>Tasks</NavLink>
        <NavLink to="/projects" className="nav-link" onClick={onHideSidebar}>Projects</NavLink>
    </Nav>
);

export { Sidebar };
