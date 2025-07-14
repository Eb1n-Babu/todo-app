import React from 'react';

function TodoItems({task,onClick}) {
    return (
        <div>
            <li
            onClick={onClick}
            className={task.completed ? "completed" : "active"}>{task.text}</li>
        </div>
    );
}

export default TodoItems;