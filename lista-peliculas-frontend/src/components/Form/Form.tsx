import "./Form.css"
import { useState, useEffect } from "react";
import Data from "./Data"

function Form () {
    const [name, setName] = useState<string>("");;
    const [email, setEmail] = useState<string>("");
    const [showData, setShowData] = useState<boolean>(false);

    useEffect(() => {
        if(name.includes("ñ")){
            console.log("Tiene una ñ")
        }
    }, [name, email]);

    const handleInputChange = (stateUpdate) => {
        return (event) => {
            stateUpdate(event.target.value)
        }
    }

    const handleOnClcik = () => {
        if(showData){
            setName("");
            setEmail("");
        }
        //toggle the flag
        setShowData(!showData)
    }

    return(
    <>
        <Data name={name} email={email} showData={showData}/>
        <section className="formContainer">
            <span className="inputContainer">
                <label htmlFor="name">Nombre:</label>
                <input type="text" id="name" name="name" value={name} 
                    onChange={handleInputChange(setName)}
                />
            </span>
            <span className="inputContainer">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={email} 
                    onChange={handleInputChange(setEmail)}
                />
            </span>
            <button className="button1" onClick={handleOnClcik}>
                {
                    showData ? "Ocultar datos" : "Mostrar datos"
                }
            </button>
        </section>
    </>
    );
}

export default Form;