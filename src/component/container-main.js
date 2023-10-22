import '../style-componet.css';
import FormContent  from "./form-content";
import ContainerOutput from "./container-output";
import { useState } from 'react';

function ContainerMain() {

    const [password, setPassword] = useState('')

    const handlePassword = (newpassword) =>{
        setPassword(newpassword);
        
    }


    return (
        <div className="container-main">
            <FormContent getpassword={handlePassword}/>
            <ContainerOutput password={password}/>
        </div>
    );
}


export default ContainerMain;