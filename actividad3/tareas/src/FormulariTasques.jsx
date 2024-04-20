//import {FaBeer} from "react-icons/fa";
//<FaBeer />

import {useState} from "react";

// eslint-disable-next-line react/prop-types
const FormulariTasques = ({agregarTasca}) => {
    const [valor, setValor] = useState("");

    const ManejoSubmit = (e) => {
        e.preventDefault();
        if (valor) {
            agregarTasca(valor);
            setValor('');

        }
    }
    return (
        <form className={"formulariTasques"} onSubmit={ManejoSubmit}>
            <input className={"input-form"} value={valor} placeholder={"KLK"} type={"text"}
                   onChange={(e) => {
                       setValor(e.target.value)
                   }}/>
            <button className={"input-boton"} type={"submit"}>Agregar tarea</button>
        </form>
    );
}

export default FormulariTasques;