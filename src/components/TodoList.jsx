import { useState } from "react"
import Formulario from "./Formulario"
import Todo from "./Todo"

const TodoList = () => {

    const [todoList, setTodoList] = useState([])

    const agregarTodo = (todo) => {
        console.log(todo)
        setTodoList(old => [...old, todo])
    }

    const eliminarTodo= (id) => {
        setTodoList(old => old.filter(item => item.id !== id))
    }

    const editarTodo = (id) => {

        const editado = todoList.map(item => (
            item.id === id ? {...item, estado: !item.estado} : item
            
        ))
        setTodoList(editado)
    }


    return (
        <>
            <Formulario agregarTodo={agregarTodo} />
            <ul className="list-group list-group-numbered">
                {todoList.map(item => (
                    <Todo key={item.id} todo={item} eliminar={eliminarTodo} editar={editarTodo} />
                ))}
            </ul>
        </>
    )
}

export default TodoList