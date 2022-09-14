import './App.css'
import { useState, useEffect } from 'react'
import { TaskCreator } from './components/TaskCreator'
import { TaskTable } from './components/TaskTable'
import { VisibilityControl } from './components/VisibilityControl'
import { Container } from './components/Container'
import Footer from './components/Footer'

function App() {

  const [tasksItems, setTasksItems] = useState([])
  const [showCompleted, setShowCompleted] = useState(false)

  function createNewTask(taskName) {

    if (!tasksItems.find(task => task.name === taskName)) {
      setTasksItems([...tasksItems, { name: taskName, done: false }])
    } else {
      alert('ERROR: Ya existe una tarea con ese nombre')
    }
  }

  const toggleTask = task => {
    setTasksItems(
      tasksItems.map(newTask => (newTask.name === task.name) ? { ...newTask, done: !newTask.done } : newTask)
    )
  }

  const deleteTask = name => {
     setTasksItems(tasksItems.filter(task => task.name !== name));
   }

  const cleanTasks = () => {
    setTasksItems(tasksItems.filter(task => !task.done))
    setShowCompleted(false)
  }
 
  useEffect(() => {
    let data = localStorage.getItem('Tarea')
    if (data) {
      setTasksItems(JSON.parse(data))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('Tarea', JSON.stringify(tasksItems))
  }, [tasksItems])

  return (
    <main className="bg-dark vh-100 text-white">
      <Container>
        <TaskCreator createNewTask={createNewTask} />
        <TaskTable tasks={tasksItems} toggleTask={toggleTask} deleteTask={deleteTask} />
        <VisibilityControl
          isChecked={showCompleted}
          setShowCompleted={(checked) => setShowCompleted(checked)}
          cleanTasks={cleanTasks}
        />
        {
          showCompleted === true && (
            <TaskTable
              tasks={tasksItems}
              toggleTask={toggleTask}
              showCompleted={showCompleted}
              deleteTask={deleteTask} />
          )
        }
      </Container>
      <Footer />
    </main>
  )
}

export default App
