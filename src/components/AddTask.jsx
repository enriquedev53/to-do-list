export default function AddTask({addToBacklog}) {

  function validateText() {
    const inputValue = document.querySelector('input').value
    inputValue.length === 0 
    ? alert('Escribe el nombre de la tarea a agregar')
    : addToBacklog(inputValue)
    document.querySelector('input').value = ''
  }

  return (
    <>
      <label htmlFor="input">New task</label>
      <input id='input' type="text" />
      <button onClick={validateText}>Add</button>
    </>
  )
}