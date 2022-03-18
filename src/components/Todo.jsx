
const Todo = ({todo, eliminar, editar}) => {
    const {nombre, descripcion, estado, prioridad, id} = todo
    return (
        <li className="list-group-item d-flex justify-content-between align-items-start mt-2">
            <div className="ms-2 me-auto">
                <div className="fw-bold">
                    {nombre} ({estado ? 'Finalizado' : 'Pendiente'})
                </div>
                <p>{descripcion}</p>
                <div>
                    <button className="btn btn-danger me-2" onClick={()=> eliminar(id)}>Eliminar</button>
                    <button className="btn btn-warning" onClick={()=> editar(id)}>Editar</button>
                </div>
            </div>
            
            <span className="badge bg-primary rounded-pill">
                {prioridad && 'Prioritario'}
            </span>
        </li>
    )
}

export default Todo