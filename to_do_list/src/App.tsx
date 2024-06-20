import { useState } from 'react'
import ToDoList from './components/ToDoList';
import './App.css'

function App() {
  const [todos, setTodos] = useState([] as any)
  const [inputValue, setInputValue] = useState('')

function handleChange(e: any){
  setInputValue(e.target.value)
}

function handleSubmit(e: any){
  e.preventDefault()
  setTodos([...todos, inputValue])
  setInputValue('')
}

function handleDelete(todelete: any) {
  const newArray = todos.filter((item: any) => item !== todelete)
  setTodos(newArray)
}

function handleEdit(toedit: any) {
  const newArray = todos.filter((item: any) => item !== toedit)
  setTodos(newArray)
  setInputValue(toedit)
}

  return (
    <div>
      <h1>Todo List</h1>
      <form>
        <input type='text' value={inputValue} onChange={handleChange}/>
        <button onClick={handleSubmit}>Add Task</button>
      </form>
      <ul>
      <ToDoList 
          todos={todos}
          handleEdit={handleEdit}
          handleDelete={handleDelete} />
      </ul>
    </div>
  )
}
export default App
