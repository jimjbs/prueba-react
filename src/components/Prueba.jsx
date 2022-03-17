import { useRef } from "react"

const Prueba = () => {

    const formulario = useRef()

    const forma = (e) => {
        e.preventDefault()
        const datos = new FormData(formulario.current)
        
        const objeto = Object.fromEntries(datos)
        const {toDo, descripcionToDo} = objeto
        if(!toDo.trim() || !descripcionToDo.trim()){
            console.log('error')
            return
        }

        console.log('funciona')
    }

    return(
        <>
            <form ref={formulario} onSubmit={forma}>
                <input type="text" 
                name="toDo"
                placeholder="ingresar datos"
                className="form-control mb-2"
                defaultValue="lista to do"
                />
                <textarea 
                name="descripcionToDo"
                placeholder="ingrese descripcion del to do"
                className="form-control mb-2"
                defaultValue="descripcion todo list"
                />
                <select 
                name="toDoOpciones" 
                className="form-control mb-2"
                defaultValue="pendiente"
                >
                    <option value="pendiente">Pendiente</option>
                    <option value="completo">Completo</option>
                </select>
                <button className="btn btn-dark" type="submit">Enviar</button>
            </form>
        </>
    )
}

export default Prueba