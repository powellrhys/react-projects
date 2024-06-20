import './ToDoList.css'

export default function Slider(
    {todos, handleEdit, handleDelete} :
    {todos:any, handleEdit:any, handleDelete:any}) {

  return (
    <>
        {todos.map((todo: any, index: any) => (
            <li key={index}>
                {todo}
                <div className="buttons">
                    <button onClick={() => handleEdit(todo)}>Edit</button>
                    <button onClick={() => handleDelete(todo)}>Delete</button>
                </div>
            </li>
        ))}
    </>
    )
};
