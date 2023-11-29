import React, { useState } from "react";

function Semaforo({color}) {

    const [colorOn,setColorOn]=useState(color)
    console.log(colorOn);

    function on() {
        colorOn === "bg-danger bg-opacity-50" ? setColorOn("bg-danger") : setColorOn("bg-danger bg-opacity-50")
        colorOn === "bg-warning bg-opacity-50" ? setColorOn("bg-warning") : setColorOn("bg-warning bg-opacity-50")
        colorOn === "bg-success bg-opacity-50" ? setColorOn("bg-success") : setColorOn("bg-success bg-opacity-50")    
        
    }

    return(
        <button type="button" onClick={on} className={`btn ${color} rounded-circle m-3`} style={{width: "120px", height: "120px"}}></button>
    );
    
}

export default Semaforo