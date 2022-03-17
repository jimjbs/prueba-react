import { useState } from "react"

const FormuControlado = () => {

    const [todo, setTodo] = useState({
        todoName: '',
        descripcionTodo: '',
        todoOpciones: 'pendiente',
        boxcheck: false
    })

    const handleSubmit = (e)=> {
        e.preventDefault()
        const {todoName, descripcionTodo} = todo
    
        if(!todoName.trim() || !descripcionTodo.trim()){
            console.log('error')
            return
        }
        console.log('formulario enviado con exito')

        // setTodo({
        //     todoName: '',
        //     descripcionTodo: '',
        //     todoOpciones: 'pendiente',
        //     boxcheck: false
        // })
    }
    const handleChange = (e)=> {

        const {name, type, checked, value} = e.target
        setTodo({
            ...todo,
            [name]: type === 'checkbox' ? checked : value
        })
    }


    return (
        <>
            <h2>practica</h2>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                placeholder="ingrese sus datos"
                name="todoName"
                className="form-control mb-2"
                onChange={handleChange}
                />
                <textarea 
                name="descripcionTodo"
                placeholder="ingrese descripcion"
                className="form-control mb-2"
                onChange={handleChange}

                />
                <select 
                name="todoOpciones"
                className="form-control mb-2"
                onChange={handleChange}

                >
                    <option value="pendiente">Pendiente</option>
                    <option value="completo">Completo</option>
                </select>

                <div className="form-check">
                    <input 
                    className="form-check-input" 
                    type="checkbox" 
                    value="" 
                    name="boxcheck"
                    onChange={handleChange}
                    required
                    />
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                        Checked checkbox
                    </label>
                </div>

                <button className="btn btn-primary">Enviar</button>
            </form>
        </>
    )
}

export default FormuControlado