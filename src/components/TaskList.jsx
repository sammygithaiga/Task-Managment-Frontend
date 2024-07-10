import React, { useState } from 'react';
import FilterSearch from './FilterSearch';

function TaskList() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', completed: false },
    { id: 2, title: 'Task 2', completed: true },
    { id: 3, title: 'Task 3', completed: false },
  ]);

  const [filteredTasks, setFilteredTasks] = useState(tasks);

  const handleFilter = (filteredTasks) => {
    setFilteredTasks(filteredTasks);
  };

  return (
    <section>
      <h2>Tasks</h2>
      <FilterSearch tasks={tasks} onFilter={handleFilter} />
      <ul>
        {filteredTasks.map(task => (
          <li key={task.id}>
            <span>{task.title}</span>
            <span>{task.completed ? 'Completed' : 'Pending'}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TaskList;