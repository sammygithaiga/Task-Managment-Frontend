import React, { useState } from 'react';

function AddTaskForm() {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to add the task
    console.log('New Task:', title);
    setTitle('');
  };

  return (
    <section>
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          placeholder="Task Title"
        />
        <button type="submit">Add Task</button>
      </form>
    </section>
  );
}

export default AddTaskForm;