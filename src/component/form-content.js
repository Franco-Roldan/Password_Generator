import { useState } from "react";
import ButtonQuantity from "./button-quantity";
import ButtonSubmit from "./button-submit";
import ButtonSwitch from "./button-switch";
import Generator from "../functions/passwordGenerator"

function FormContent({getpassword}) {


    const [config, setConfig] = useState({
        characters: 8,
        numbers: true,
        symbols: true,
        capital_letters: true,
    });

    const handleConfig = (indice ,newValue) => {
        const configCopy = {...config};
        configCopy[indice] = newValue;
        setConfig(configCopy); 
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        getpassword(Generator(config));
        

    }

    return (
        <form className="form-content" onSubmit={onSubmit}>
            <ButtonQuantity textinfo={'Caracteres: '} valueQuantity={config.characters} functionValue={handleConfig}></ButtonQuantity>
            <ButtonSwitch textinfo='Numeros:' id={'switch1'} name={'numbers'} value={config.numbers} functionValue={handleConfig} />
            <ButtonSwitch textinfo='Simbolos:' id={'switch2'} name={'symbols'} value={config.symbols} functionValue={handleConfig} />
            <ButtonSwitch textinfo='Mayusculas:'id={'switch3'} name={'capital_letters'} value={config.capital_letters} functionValue={handleConfig} />
            <ButtonSubmit value={'Generar'}/>
        </form>
    );
}

export default FormContent;