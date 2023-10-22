import { useState } from "react";

function ButtonQuantity({textinfo, valueQuantity, functionValue}) {
    

    const [quantity, setQuantity] = useState(valueQuantity);
    
    function Minus(){

        if(quantity > 8){
            setQuantity(quantity - 1);
            functionValue('characters', quantity -1);
        }

    }
    function Plus(){

        if(quantity < 64){
            setQuantity(quantity + 1)
            functionValue('characters', quantity + 1);
        }

    }

   


    return (
        <div className="container-quantity">
            <label >{textinfo}</label>
            <div>
                <button className="btn-minus" onClick={Minus}>
                    <img src="minus-icon.svg" alt="minus-icon" width={24} height={24} />
                </button>
                <span className="number">{quantity}</span>
                <button className="btn-plus" onClick={Plus}>
                    <img src="plus-icon.svg" alt="plus-icon" width={24} height={24}/>
                </button>
            </div>

        </div>
    );
}

export default ButtonQuantity;