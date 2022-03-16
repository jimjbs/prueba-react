const Comida = (props) => {

    return(
        <>
            <ul>
                {props.comida.map((item, index) => (
                    <li key={index}>{index + 1} {item}</li>
                ))}
            </ul>
        </>
    )
        
}

export default Comida