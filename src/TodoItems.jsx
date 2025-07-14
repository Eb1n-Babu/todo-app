import React from 'react';

function TodoItems({task,onClick,onDelete}) {
    return (
        <div>
            <li className={task.completed ? "completed" : "active"}>
                <span>onClick={onClick} {task.text}</span>
                <button onClick={onDelete} className="delete-btn">🗑 Delete</button>
            </li>
        </div>
    );
}

export default TodoItems;