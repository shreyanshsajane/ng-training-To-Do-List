import React from 'react';

const TaskList = ({ tasks, onEditTask, onDeleteTask }) => {
    return (
        <table className="task-table">
            <thead>
                <tr>
                    <th><input type="checkbox" /></th>
                    <th>Assigned To</th>
                    <th>Status</th>
                    <th>Due Date</th>
                    <th>Priority</th>
                    <th>Comments</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {tasks.length === 0 ? (
                    <tr>
                        <td colSpan="7">No tasks available</td>
                    </tr>
                ) : (
                    tasks.map((task, index) => (
                        <tr key={index}>
                            <td><input type="checkbox" /></td>
                            <td>{task.assignedTo}</td>
                            <td>{task.status}</td>
                            <td>{task.dueDate}</td>
                            <td>{task.priority}</td>
                            <td>{task.description}</td>
                            <td>
                                <button onClick={() => onEditTask(task)}>Edit</button>
                                <button onClick={() => onDeleteTask(task)}>Delete</button>
                            </td>
                        </tr>
                    ))
                )}
            </tbody>
        </table>
    );
};

export default TaskList;
