import { useState } from 'react'
import './App.css'
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
      const updatedTask = task.map((task,i)=>
      i===index ?{...task, completed: !task.completed}:task);
      setTask(updatedTask)
  }

  return (
      <div className="App">
          <div className="input-section">
              <label>Task:<input type="text" placeholder="Enter your task here" value={input}
              onChange={(e)=>setInput(e.target.value)}/></label>
              <button onClick={addTask}>Add Task</button>
          </div>
          <div>
              <ul className="task-list">
                  {task.map((task, index) => <TodoItems
                  index={index} task={task} onClick={toggleTask(index)}/>)}
              </ul>
          </div>
      </div>




  )
}

export default App
