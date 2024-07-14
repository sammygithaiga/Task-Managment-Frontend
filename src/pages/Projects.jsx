import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import '../styles/project.css';

export const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [projectDetails, setProjectDetails] = useState({ name: '', description: '' });

    useEffect(() => {
        fetch('/api/projects')
            .then(response => response.json())
            .then(data => setProjects(data));
    }, []);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('/api/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(projectDetails),
        })
            .then(response => response.json())
            .then(data => {
                toast.success('Project created successfully');
                setProjects([...projects, data]);
                handleClose();
            })
            .catch(error => {
                console.error('Error creating project', error);
                toast.error('Failed creating project', error);
            });
    };

    const handleDelete = (projectId) => {
        fetch(`/api/projects/${projectId}`, { method: 'DELETE' })
            .then(response => {
                if (response.ok) {
                    toast.success('Project deleted successfully');
                    setProjects(projects.filter(project => project.id !== projectId));
                } else {
                    toast.error('Failed to delete project');
                }
            });
    };

    return (
        <div className="projects-container">
            <h1 className="text-center mb-4">Projects</h1>
            <Button variant="success" onClick={handleShow} className="mb-3">
                Add Project
            </Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Number</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map((project, index) => (
                        <tr key={project.id}>
                            <td>{index + 1}</td>
                            <td>{project.name}</td>
                            <td>{project.description}</td>
                            <td>
                                <Button variant="danger" onClick={() => handleDelete(project.id)}>
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add/Edit Project</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formProjectName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter name"
                                value={projectDetails.name}
                                onChange={(e) => setProjectDetails({ ...projectDetails, name: e.target.value })}
                            />
                        </Form.Group>

                        <Form.Group controlId="formProjectDescription" className="mt-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter description"
                                value={projectDetails.description}
                                onChange={(e) => setProjectDetails({ ...projectDetails, description: e.target.value })}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="mt-3">
                            Save
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};
