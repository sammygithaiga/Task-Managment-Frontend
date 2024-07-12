import { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../styles/sidebar.css';

export function Sidebar() {
  const [show, setShow] = useState(true);

  const handleToggle = () => setShow(!show);

  return (
    <div className="sidebar-container">
      <button className="toggle-button" onClick={handleToggle}>
         
      </button>
      <div className={`sidebar ${show ? 'show' : ''}`}>
        <Nav className="flex-column">
          <NavLink to="/" className="nav-link custom-nav-link">Home</NavLink>
          <NavLink to="/tasks" className="nav-link custom-nav-link">Tasks</NavLink>
          <NavLink to="/projects" className="nav-link custom-nav-link">Projects</NavLink>
          <NavLink to="/login" className="nav-link custom-nav-link">Login</NavLink>
        </Nav>
      </div>
    </div>
  );
}
