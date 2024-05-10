import "./Form.css"
import { useState, useEffect } from "react";
import Data from "./Data"

function Form () {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    
    const loginData = {
        email: 'luisfercho1209@gmail.com',
        password: '12345'
    }
    /*
    useEffect(() => {
        if(name.includes("ñ")){
            console.log("Tiene una ñ")
        }
    }, [name, email]);
    */

    const handleInputChange = (stateUpdate) => {
        return (event) => {
            stateUpdate(event.target.value)
        }
    }

    const handleOnClcik = () => {
        //Hacemos la comparacion de los valores dentro del loginData
        if(email === loginData.email && password === loginData.password){
            alert("Usuarios ingresados jeje")
        }
    }

    return(
    <>
        <section className="formContainer">
            <span className="inputContainer">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={email} 
                    onChange={handleInputChange(setEmail)}
                />
            </span>
            <span className="inputContainer">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" value={password} 
                    onChange={handleInputChange(setPassword)}
                />
            </span>
            <button className="button1" onClick={handleOnClcik}>Ingresar</button>
        </section>
    </>
    );
}

export default Form;