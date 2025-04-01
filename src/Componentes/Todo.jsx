import {React} from 'react'

const Todo = ({todo, removeTodo, completarTodo }) => {
  return (
    <div className="todo" style ={{textDecoration: todo.isCompleted ? "line-through" : ""}}> 
            <div className="content">
              <p>{todo.text}</p>
              <p className="category"> ({todo.category})</p>
            </div>
            <div>
              <button className='Completar' onClick = {() => completarTodo(todo.id)}>Completar</button>
              <button className='Deletar' onClick = {() => removeTodo(todo.id)}>X</button>
            </div>
          </div>
  )
}

export default Todo;