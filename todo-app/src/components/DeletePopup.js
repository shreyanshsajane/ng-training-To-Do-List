import React from 'react';

const DeletePopup = ({ task, onConfirm, onCancel }) => {
    return (
        <div className="popup">
            <div className="popup-inner">
                <h2>Delete</h2>
                <p>Do you want to delete task "{task?.assignedTo}"?</p>
                <div className="buttons">
                    <button onClick={onCancel}>Cancel</button>
                    <button onClick={onConfirm}>Confirm</button>
                </div>
            </div>
        </div>
    );
};

export default DeletePopup;
