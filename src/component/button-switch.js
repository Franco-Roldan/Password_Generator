const ButtonSwitch = ({textinfo, id, name, value, functionValue}) => {
    

    function setValue(){
        value = !value
        functionValue(name, value);
    }

    return (
        <div className="btn-switch">
            <p>{textinfo}</p>
            <input type="checkbox" id={id} name={name} onClick={() =>{setValue()}} defaultChecked></input>
            <label htmlFor={id} className="lbl-switch"></label>
        </div>
    );
}


export default ButtonSwitch;