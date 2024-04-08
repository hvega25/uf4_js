import Boton from "./Boton.jsx";
import {useState} from "react";

function App() {
    const [numClicks, setNumClicks] = useState(0);

    const increment = () => {
        setNumClicks(numClicks + 1)
    };
    const reiniciar = () => {
        setNumClicks(0)
    };
    return (
        <>
            <Boton texto="Click" onClick={increment} esClick={true}/>
            <Boton texto="Reiniciar" onClick={reiniciar} esClick={false}/>
            <div>El numero es: {numClicks}</div>
        </>
    )
}

export default App
