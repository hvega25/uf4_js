import {useState} from "react";
import Tasca from "./Tasca.jsx";

const LlistaTasques = () => {
    const [tasques, setTasques] = useState([])

    return (
        <>
            {tasques?.map((item) => (
                <Tasca
                    key={item.id}
                    text={item.text}
                />
            ))}
        </>
    );
};

export default LlistaTasques;