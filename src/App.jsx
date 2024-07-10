import React from 'react';
import Header from './components/Header';

import TaskList from './components/TaskList';
import TaskDetailsView from './components/TaskDetailsView'
import AddTaskForm from './components/AddTaskForm';
import FilterSearch from './components/FilterSearch';
import Sidebar from './components/SideBar';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar/>
      <main>
        <TaskList />
        <TaskDetailsView/>
        <AddTaskForm />
      </main>
    </div>
  );
}

export default App;