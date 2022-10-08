const tasks = [
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
]


const Tasks = () => {
  return (
    tasks.map(task => (<h3>
        {task.text}
    </h3>))
  )
}

export default Tasks
