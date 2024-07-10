import React, { useState } from 'react';

function FilterSearch({ tasks, onFilter }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    applyFilters(e.target.value, filterStatus);
  };

  const handleStatusChange = (e) => {
    setFilterStatus(e.target.value);
    applyFilters(searchTerm, e.target.value);
  };

  const applyFilters = (search, status) => {
    let filteredTasks = tasks;
    
    if (status !== 'all') {
      filteredTasks = filteredTasks.filter(task => task.completed === (status === 'completed'));
    }

    if (search) {
      filteredTasks = filteredTasks.filter(task => task.title.toLowerCase().includes(search.toLowerCase()));
    }

    onFilter(filteredTasks);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <select value={filterStatus} onChange={handleStatusChange}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </select>
    </div>
  );
}

export default FilterSearch;