import React, { useState } from 'react';
import "./../styles/DashboardLayout.css";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Sidebar } from './Sidebar'; 

export const DashboardLayout = ({ children }) => {
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    const hideSidebar = () => {
        setShowSidebar(false);
    };

    return (
        <div className="dashboard-layout">
           
            <Button variant="outline-dark" className={`toggle-button ${showSidebar ? 'hide' : ''}`} onClick={toggleSidebar}>
                <i className={`bi bi-list icon`}></i>
            </Button>

          
            <div className={`sidebar ${showSidebar ? 'show' : ''}`}>
                <Sidebar onHideSidebar={hideSidebar} />
            </div>

           
            <Container fluid className="main-content">
                <Row>
                    <Col xs={12}>
                        {children}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};


