import { useState } from "react"

const Contador = () => {
    // let contador = 0
    const [aumento, setAumento] = useState(0)

    const aumentar = ()=> {
        setAumento(aumento + 1)
    }

    return(
        <div className="container">
            <h3>Contador</h3>
            <h4>   {aumento} </h4>
            <button
            onClick={aumentar}
            >
                Aumentar
            </button>
        </div>
    )
}

export default Contador