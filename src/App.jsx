import { useState } from 'react'
import "./style.css";
import TodoItems from "./TodoItems.jsx";

function App() {
  const [task, setTask] = useState([])
  const [input, setInput] = useState('')

  const addTask = () =>{
      if (input.length > 0){
          setTask([...task, {text: input,completed: false}])
          setInput('')
      }
  }

  const toggleTask = index => {
      const updatedTask = task.map((t,i)=>
      i===index ?{...t, completed: !t.completed}:t);
      setTask(updatedTask)
  }

  const deleteTask = index => {
      const updatedTask = task.filter((_,i)=>i!==index);
      setTask(updatedTask)
  }

  return (
      <div className="app">
          <div className="input-section">
              <label>Task:<input type="text" placeholder="Enter your task here" value={input}
              onChange={(e)=>setInput(e.target.value)}/></label>
              <button onClick={addTask}>Add Task</button>
          </div>
          <div>
              <ul className="task-list">
                  {task.map((t, index) =>
                      <TodoItems
                          key={index}
                          index={index}
                          task={t}
                          onClick={() => toggleTask(index)}
                          onDelete={() => deleteTask(index)}
                    />)}
              </ul>
          </div>
      </div>




  )
}

export default App
