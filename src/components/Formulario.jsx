import { useState } from "react"

const Formulario = () => {

    const [todo, setTodo] = useState({
        todoName: '',
        todoDescripcion: '',
        todoEstado: 'pendiente'
    })

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleChange = (e) => {
        setTodo({
            ...todo,
            [e.target.name]: e.target.value
        })

        // setTodo(old => ({
        //     ...old,
        //     [e.target.name]: e.target.value
        // }))
    }

    return (
        <>
            <h2 className="text-danger mt-4">Formulario Controlado</h2>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    placeholder="ingrese To do"
                    name="todoName"
                    className="form-control mb-2"
                    defaultValue="tarea nro1"
                    // onChange={e => setTodo({...todo, todoName: e.target.value})}
                    onChange={handleChange}
                />
                <textarea 
                    name="todoDescripcion"
                    placeholder="Ingrese descripcion del to do"
                    className="form-control mb-2"
                    defaultValue="descripcion tarea nro1"
                    // onChange={e => setTodo({...todo, todoDescripcion: e.target.value})}
                    onChange={handleChange}

                />
                <select 
                    name="todoEstado"
                    className="form-control mb-2"
                    defaultValue="pendiente"
                    // onChange={e => setTodo({...todo, todoEstado: e.target.value})}
                    onChange={handleChange}

                >
                    <option value="pendiente">Pendiente</option>
                    <option value="completada">Completada</option>
                </select>
                <button type="submit" className="btn btn-danger mb-2">Agregar</button>
            </form>
        </>
    )
}

export default Formulario