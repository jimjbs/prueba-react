import { useRef } from "react"

const FormNoControlado = () => {

    const formulario = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        const datos = new FormData(formulario.current)

        
        const objetoDatos = Object.fromEntries([...datos.entries()])

        const {todoDescripcion, todoName} = objetoDatos

        if(!todoName.trim() || !todoDescripcion.trim()){
            console.log('error')
            return
        }
        
        console.log('funciona')
    }

    return (
    <>
        <h2>No controlado</h2>
        <form ref={formulario} onSubmit={handleSubmit}>
            <input type="text"
                placeholder="ingrese To do"
                name="todoName"
                className="form-control mb-2"
                defaultValue="tarea nro1"
            />
            <textarea 
                name="todoDescripcion"
                placeholder="Ingrese descripcion del to do"
                className="form-control mb-2"
                defaultValue="descripcion tarea nro1"
            />
            <select 
                name="todoEstado"
                className="form-control mb-2"
                defaultValue="pendiente"
            >
                <option value="pendiente">Pendiente</option>
                <option value="completada">Completada</option>
            </select>
            <button type="submit" className="btn btn-primary mb-2">Agregar</button>
        </form>
    </>
)
}

export default FormNoControlado