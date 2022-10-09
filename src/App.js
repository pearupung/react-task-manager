import Header from "./components/Header"
import Tasks from './components/Tasks'
import { useState } from 'react'


function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Bring the knight a shruberry",
        day: '2022-12-03',
        reminder: '2022-12-01',
    },
    {
        id: 2,
        text: "Wake up in the morning",
        day: '2022-11-03',
        reminder: '2022-11-01',
    },
    {
        id: 3,
        text: "Clean your room",
        day: '2022-10-03',
        reminder: '2022-10-01',
    },
])


  return (
    <div className='container'>
      <Header ></Header>
      <Tasks tasks={tasks}></Tasks>
    </div>
  );
}

export default App;
