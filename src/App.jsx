import { useMemo, useState } from 'react'
import './App.css'
import Backlog from './components/Backlog'
import Completed from './components/Completed'
import AddTask from './components/AddTask'
import Edit from './components/Edit'
import { useLocalStorage } from './components/UseLocalStorage'

function App() {
  const [showModal, setShowModal] = useState(false)
  const [id, setId] = useState(0)
  const [backlogTask, setBacklogTask] = useLocalStorage('backlog', [])
  const [completedTask, setCompletedTask] = useLocalStorage('completed', [])
  const [completed, setCompleted] = useState(completedTask)
  const [task, setTask] = useState(backlogTask)

  function addToBacklog(taskName, id, fromCompleted = false) {
    const updateBacklogTaskList = [...task, taskName]
    setTask(updateBacklogTaskList)
    setBacklogTask(updateBacklogTaskList)
    fromCompleted ? removeFromCompleted(id) : ''
  }

  function addToCompleted(taskName, id) {
    const updateCompletedTaskList = [...completed, taskName];
    setCompleted(updateCompletedTaskList);
    setCompletedTask(updateCompletedTaskList);
    removeFromBacklog(id)
  }

  function removeFromBacklog(id) {
    const updateBacklog = [...task];
    setTask(updateBacklog.filter((item, index) => index !== id));
    setBacklogTask(updateBacklog.filter((item, index) => index !== id));
  }

  function removeFromCompleted(id) {
    const updateBacklog = [...completed];
    setCompleted(updateBacklog.filter((item, index) => index !== id));
    setCompletedTask(updateBacklog.filter((item, index) => index !== id));
  }

  function editTask(newText, id, show = false) {
    let updateBacklog = [...task];
    updateBacklog.splice(id, 1, newText)
    setTask(updateBacklog)
    validateModalValue(show)
  }

  function validateModalValue(show = false, id) {
    setId(id)
    setShowModal(show)
  }

  return (
    <>
      <h1>To-Do List</h1>
      <AddTask addToBacklog={addToBacklog}/>
      <section className="tasks-container">
      {!showModal ? (
        <Backlog 
          task={task} 
          validateModalValue={validateModalValue}
          addToCompleted={addToCompleted}
          removeFromBacklog={removeFromBacklog}
        />
      )
      : (
        <Edit 
        id={id}
        editTask={editTask}/>
      )
      }
        <Completed 
          completed={completed}
          removeFromCompleted={removeFromCompleted}
          addToBacklog={addToBacklog}
        />
      </section>
    </>
  )
}

export default App
