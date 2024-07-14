import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import '../styles/tasks.css';

export const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [taskDetails, setTaskDetails] = useState({ title: '', description: '' });

    useEffect(() => {
        // Fetch tasks from API
        fetch('/api/tasks')
            .then(response => response.json())
            .then(data => setTasks(data))
            .catch(error => console.error('Error fetching tasks:', error));
    }, []);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add logic to handle create or update task
        fetch('/api/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(taskDetails)
        })
        .then(response => response.json())
        .then(data => {
            toast.success('Task created successfully');
            setTasks([...tasks, data]);
            handleClose();
        })
        .catch(error => {
            console.error('Error creating task:', error);
            toast.error('Failed to create task');
        });
    };

    const handleDelete = (taskId) => {
        fetch(`/api/tasks/${taskId}`, { method: 'DELETE' })
            .then(response => {
                if (response.ok) {
                    toast.success('Task deleted successfully');
                    setTasks(tasks.filter(task => task.id !== taskId));
                } else {
                    toast.error('Failed to delete task');
                }
            })
            .catch(error => {
                console.error('Error deleting task:', error);
                toast.error('Failed to delete task');
            });
    };

    return (
        <div className="tasks-container">
            <h1 className="text-center mb-4">Tasks</h1>
            <Button variant="success" onClick={handleShow} className="mb-3">
                Add Task
            </Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Number</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task, index) => (
                        <tr key={task.id}>
                            <td>{index + 1}</td>
                            <td>{task.title}</td>
                            <td>{task.description}</td>
                            <td>
                                <Button variant="danger" onClick={() => handleDelete(task.id)}>
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add/Edit Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formTaskTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter title"
                                value={taskDetails.title}
                                onChange={(e) => setTaskDetails({ ...taskDetails, title: e.target.value })}
                            />
                        </Form.Group>

                        <Form.Group controlId="formTaskDescription" className="mt-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter description"
                                value={taskDetails.description}
                                onChange={(e) => setTaskDetails({ ...taskDetails, description: e.target.value })}
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
