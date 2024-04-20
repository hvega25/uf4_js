import {useState} from "react";
import FormulariTasques from "./FormulariTasques.jsx";
import Tasca from "./Tasca.jsx";
import tasca from "./Tasca.jsx";


const LlistaTasques = () => {
    const [tasques, setTasques] = useState([])


    const agregarTasca = (tasca) => {
        setTasques([...tasques, {id: tasques.length, tasque: tasca, completada: false, editar: false}])
        console.log(tasques)
    }

    const SubRayado = (id) => {
        setTasques(
            tasques.map((todo) =>
                todo.id === id ? {...todo, completada: !todo.completada} : todo
            )
        );
    }
    const editTasca = (id) => {
        setTasques(
            tasca.map((tasca) =>
                tasca.id === id ? {...tasca, isEditing: !tasca.isEditing} : tasca
            )
        );
    }




    const deleteTasca = (id) => setTasques(tasques.filter((tasca) => tasca.id !== id));
    return (
        <>
            <FormulariTasques agregarTasca={agregarTasca}/>
            {tasques.map((tasca, index) => (
                <Tasca
                    key={index}
                    tasque={tasca}
                    SubRayado={SubRayado}
                    deleteTasca={deleteTasca}
                    editTasca={editTasca}
                />
            ))}

        </>
    );
};

export default LlistaTasques;