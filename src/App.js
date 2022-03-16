// import Contador from "./components/Contador"
import { useState } from "react"
import Comida from "./components/Comida"
import Contador from "./components/Contador"

const App = () => {

    const [saludo, setSaludo] = useState('')
    // const user = true

    const saludar = () => {
        setSaludo('hello world')
    } 
    
    // const Despedida = () =>  <h3>Adios mundo</h3>
    
    const comida = ['🍕','🍔','🍟','🌭']

    return(
        <>

        <Contador/>

        <div className="container">
            <h2>Practica React</h2>
            <ul>
                <Comida comida={comida} />
            </ul>

            <h3> {saludo} </h3>
            {/* {user ? <Saludo/> : <Despedida />} */}
        <button 
        // btn btn-danger
        onClick={saludar}>
            Enviar
        </button>
        </div>
        </>
    )
}




export default App

