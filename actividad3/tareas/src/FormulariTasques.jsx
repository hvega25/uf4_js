import {FaBeer} from "react-icons/fa";

const FormulariTasques = () => {
    return (
        <form>
            <input placeholder={"Ingresa la tarea"}/>
            <button type={"submit"}><FaBeer /></button>
        </form>
    );
}

export default FormulariTasques;