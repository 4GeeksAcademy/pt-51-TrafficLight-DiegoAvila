import React, { useState } from "react";

function Semaforo({color}) {

    const [colorOn,setColorOn]=useState(color)
    console.log(colorOn);
    console.log(color)
    function on() {
        // he intentado hacaerlo de esta forma pero hay algo que no hago bien

        // colorOn === "bg-danger bg-opacity-50" ? setColorOn("bg-danger") : setColorOn("bg-danger bg-opacity-50")
        // colorOn === "bg-warning bg-opacity-50" ? setColorOn("bg-warning") : setColorOn("bg-warning bg-opacity-50")
        // colorOn === "bg-success bg-opacity-50" ? setColorOn("bg-success") : setColorOn("bg-success bg-opacity-50")
        
        // esta otra forma de acerlo seguro que hay mejor manera de programarlo pero no doy con la solucion
        if (colorOn === "bg-danger bg-opacity-50"){
            setColorOn("bg-danger")
        }
        if (colorOn === "bg-warning bg-opacity-50"){
            setColorOn("bg-warning")
        }
        if (colorOn === "bg-success bg-opacity-50"){
            setColorOn("bg-success")
        }
        if (colorOn === "bg-danger"){
            setColorOn("bg-danger bg-opacity-50")
        }
        if (colorOn === "bg-warning"){
            setColorOn("bg-warning bg-opacity-50")
        }
        if (colorOn === "bg-success"){
            setColorOn("bg-success bg-opacity-50")
        }
    }
    
    return(
        <button type="button" onClick={on} className={`btn ${colorOn} rounded-circle m-3`} style={{width: "120px", height: "120px"}}></button>
    );
    
}

export default Semaforo