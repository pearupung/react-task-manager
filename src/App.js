import Header from "./components/Header"
import Tasks from './components/Tasks'
import { useState } from 'react'
import AddTask from "./components/AddTask"

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Bring the knight a shruberry",
        day: '2022-12-03',
        reminder: false,
    },
    {
        id: 2,
        text: "Wake up in the morning",
        day: '2022-11-03',
        reminder: false,
    },
    {
        id: 3,
        text: "Clean your room",
        day: '2022-10-03',
        reminder: false,
    },
  ])

  const [showAddTask, setShowAddTask] = useState(false)

  const addTask = (task) => {
    console.log(task)
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id===id ? 
      {...task, reminder: !task.reminder} :
      task  
    ))
  }


  return (
    <div className='container'>
      <Header 
        toggleAdd={setShowAddTask}
        showAdd={showAddTask}
        ></Header>
      {showAddTask && <AddTask onAdd={addTask}></AddTask>}
      {tasks.length === 0 ? 
        'No tasks to show.' :
        <Tasks 
          tasks={tasks} 
          onDelete={deleteTask} 
          onToggle={toggleReminder}>
        </Tasks>}
    </div>
  );
}

export default App;
