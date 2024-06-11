export default function Completed({completed, removeFromCompleted, addToBacklog}) {

  const isEmpty = () => completed.length === 0

  return (
    <aside className="completed-task container">
      <h1>Completed</h1>
      <ol>
      {(isEmpty)
        ? completed.map((item, id) => (
            <div key={id} className="task-list">
              <li>{item}</li>
              <div className="icons-container">
                <a onClick={() => addToBacklog(item, id, true)}>
                  <img src="./icons/recargar.png" alt="check icon"/>
                </a>
                <a className="" onClick={() => removeFromCompleted(id)}>
                  <img src="./icons/borrar.png" alt="remove icon"/>
                </a>
              </div>
            </div>
          )
        )
        : ''
      }
      </ol>
    </aside>
  )
}