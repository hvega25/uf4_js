import {FaEdit, FaTrashAlt} from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const Tasca = ({tasque, SubRayado, deleteTasca, editTasca}) => {

    return (
        <div className={"tarea"}>
            {/* eslint-disable-next-line react/prop-types */}
            <p onClick={() => SubRayado(tasque.id)}
               className={`${tasque.completada ? 'completada' : "sinCompletar"}`}>{tasque.tasque}</p>

            <p onClick={() => deleteTasca(tasque.id)}><FaTrashAlt/></p>
        </div>
    );
};

export default Tasca;