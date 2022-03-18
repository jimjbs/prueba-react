import { useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import Swal from 'sweetalert2'


const Formulario = ({agregarTodo}) => {
    const initialState = {
        nombre: '',
        descripcion: '',
        estado: 'pendiente',
        prioridad: false
    }
    const [todo, setTodo] = useState(initialState)
    const {nombre, descripcion, estado, prioridad} = todo

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!nombre.trim()){
            e.target[0].focus()
            Swal.fire({
                title: 'Error!',
                text: 'No deje el nombre en blanco!',
                icon: 'error',
                confirmButtonText: 'Ok'
            })
            return
        }
        if(!descripcion.trim()){
            e.target[1].focus()
            Swal.fire({
                title: 'Error!',
                text: 'No deje la descripción en blanco!',
                icon: 'error',
                confirmButtonText: 'Ok'
            })
            return
        }
        Swal.fire({
            title: 'Exito!',
            text: 'Su tarea ha sido agregada a la lista',
            icon: 'success',
            confirmButtonText: 'Ok'
        })
        
        agregarTodo({
            nombre,
            descripcion,
            estado: estado === 'pendiente' ? false : true,
            prioridad,
            id: uuidv4()
        })

        setTodo(initialState)
        // console.log(todo)
    }
    const handleChange = (e) => {
        const {name, type, checked, value} = e.target
        setTodo({
            ...todo,
            [name]: type === 'checkbox' ? checked : value
        })
    }

    return (
        <>
            <h2>Agregar Todo</h2>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                className="form-control mb-2"
                name="nombre"
                placeholder="ingrese todo nombre"
                value={nombre}
                onChange={handleChange}
                autoComplete= 'off'
                />
                <textarea 
                name="descripcion"
                className="form-control mb-2"
                placeholder="ingrese descripcion"
                value={descripcion}
                onChange={handleChange}
                autoComplete= 'off'
                />
                <select
                name="estado"
                className="form-control mb-2"
                value={estado}
                onChange={handleChange}
                required
                >
                    <option value="pendiente">Pendiente</option>
                    <option value="completado">Completado</option>
                </select>
                
                <div className="form-check">
                    <input 
                        className="form-check-input" 
                        type="checkbox" 
                        checked={prioridad} 
                        name="prioridad"
                        id="flexCheckDefault"
                        onChange={handleChange}
                        // required
                        />
                        
                    <label 
                        className="form-check-label" 
                        htmlFor="flexCheckDefault">
                        prioridad
                    </label>
                </div>

                <button type="submit" className="btn btn-primary">Agregar</button>
            </form>
        </>
    )
}

export default Formulario