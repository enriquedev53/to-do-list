import { useMemo } from "react"

export default function Backlog({task, validateModalValue, addToCompleted, removeFromBacklog}) {
  const isEmpty = useMemo( () => task.length === 0, [task])

  return (
    <aside className="pending-task container">
      <h1>Backlog</h1>
      <ol>
        {
          (!isEmpty)
          ? task.map((item, id) => (
              <div key={id} className="task-list">
                <li>{item}</li>
                <div className="icons-container">
                  <a onClick={() => { addToCompleted(item, id) }}>
                    <img src="./icons/comprobado.png" alt="check icon"/>
                  </a>
                  <a className="icon edit" onClick={() => validateModalValue(true, id)}>
                    <img src="./icons/lapiz.png" alt="pencil edit icon"/>
                  </a>
                  <a className="icon" onClick={() => removeFromBacklog(id)}>
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