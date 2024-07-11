import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

 export function Sidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    
    <>
      <Button variant="primary" className="d-lg-none" onClick={handleShow}>
        Dashboard
      </Button>

      <Alert variant="info" className="d-none d-lg-block">
        Resize your browser to show the responsive offcanvas toggle.
      </Alert>

      <Offcanvas show={show} onHide={handleClose} responsive="lg">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Nav className="flex-column">
        <NavLink to="/" className="nav-link" >Home</NavLink>
        <NavLink to="/tasks" className="nav-link" >Tasks</NavLink>
        <NavLink to="/projects" className="nav-link" >Projects</NavLink>
        <NavLink to="/login" className="nav-link" >Login</NavLink>
        </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

