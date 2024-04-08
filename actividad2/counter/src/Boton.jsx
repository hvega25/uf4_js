const Boton = ({texto, onClick, esClick}) => {
    const btnClass = esClick ? 'btnClick' : 'btnReiniciar';

    return (
        <button className={btnClass} onClick={onClick}>{texto}</button>
    );

}

export default Boton;


