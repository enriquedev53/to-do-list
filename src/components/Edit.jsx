export default function Edit({editTask, id}) {

  function takeAText() {
    const text = document.querySelector('#change').value
    text.length === 0 
    ? alert('Escribe el nuevo nombre de la tarea')
    : editTask(text, id, false)
  }

  return (
    <aside className="pending-task container">
      <h1>Edit Task</h1>
      <div className="icons-container center">
        <input id="change"type="text" />
        <button onClick={takeAText}>Update</button>
      </div>
    </aside>
  )
}