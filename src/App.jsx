import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import TaskList from './components/TaskList';
import TaskDetail from './components/TaskDetail';
import AddTaskForm from './components/AddTaskForm';
import FilterSearch from './components/FilterSearch';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <main>
        <TaskList />
        <TaskDetail />
        <AddTaskForm />
      </main>
    </div>
  );
}

export default App;