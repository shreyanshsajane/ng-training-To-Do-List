import React, { useState, useEffect } from 'react';

const TaskForm = ({ onClose, onSave, isEditMode, currentTask }) => {
    const [task, setTask] = useState({
        assignedTo: '',
        status: '',
        dueDate: '',
        priority: '',
        description: '',
        comments: ''
    });

    useEffect(() => {
        if (isEditMode && currentTask) {
            setTask(currentTask);  // Pre-fill task data for editing
        }
    }, [isEditMode, currentTask]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask(prevTask => ({ ...prevTask, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(task);
    };

    return (
        <div className="popup">
            <div className="popup-inner">
                <h2>{isEditMode ? 'Edit Task' : 'New Task'}</h2>
                <form onSubmit={handleSubmit}>
                    <label>Assigned to</label>
                    <input type="text" name="assignedTo" value={task.assignedTo} onChange={handleChange} />

                    <label>Status</label>
                    <input type="text" name="status" value={task.status} onChange={handleChange} />

                    <label>Due Date</label>
                    <input type="date" name="dueDate" value={task.dueDate} onChange={handleChange} />

                    <label>Priority</label>
                    <input type="text" name="priority" value={task.priority} onChange={handleChange} />

                    <label>Description</label>
                    <textarea name="description" value={task.description} onChange={handleChange}></textarea>

                    <div className="buttons">
                        <button type="button" onClick={onClose}>Cancel</button>
                        <button type="submit">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TaskForm;
