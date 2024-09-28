import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import DeletePopup from './components/DeletePopup';
import './App.css';

function App() {
    const [tasks, setTasks] = useState([]);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [currentTask, setCurrentTask] = useState(null);
    const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);

    const handleNewTask = () => {
        setIsFormOpen(true);
        setIsEditMode(false);
        setCurrentTask(null);  // Clear form fields for new task
    };

    const handleEditTask = (task) => {
        setCurrentTask(task);  // Set task data to edit
        setIsFormOpen(true);
        setIsEditMode(true);
    };

    const handleDeleteTask = (task) => {
        setCurrentTask(task);  // Set task for deletion confirmation
        setIsDeletePopupOpen(true);
    };

    const handleSaveTask = (newTask) => {
        if (isEditMode) {
            // Update the task
            setTasks(tasks.map(task => (task.id === newTask.id ? newTask : task)));
        } else {
            // Add a new task
            setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
        }
        setIsFormOpen(false);
    };

    const handleConfirmDelete = () => {
        setTasks(tasks.filter(task => task.id !== currentTask.id));
        setIsDeletePopupOpen(false);
    };

    return (
        <div className="App">
            <div className="header">
                <h1>Task Manager</h1>
                <div className="action-buttons">
                    <button onClick={handleNewTask}>New Task</button>
                    <button>Refresh</button>
                </div>
            </div>
            <input type="text" placeholder="Search..." className="search-bar" />
            <TaskList tasks={tasks} onEditTask={handleEditTask} onDeleteTask={handleDeleteTask} />
            {isFormOpen && (
                <TaskForm
                    onClose={() => setIsFormOpen(false)}
                    onSave={handleSaveTask}
                    isEditMode={isEditMode}
                    currentTask={currentTask}
                />
            )}
            {isDeletePopupOpen && (
                <DeletePopup
                    task={currentTask}
                    onConfirm={handleConfirmDelete}
                    onCancel={() => setIsDeletePopupOpen(false)}
                />
            )}
        </div>
    );
}

export default App;
