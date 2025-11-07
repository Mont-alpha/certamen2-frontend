import { useRef, useState } from "react";

import React from 'react'
import { Toast } from 'primereact/toast';
import PeliculasToolbar from "../components/PeliculasToolbar";
import FormularioCompraEntrada from "../components/formularioCompraEntrada";
import EntradaTable from "../components/entradaTable";


function PeliculasContainer() {
    const toast = useRef(null)
    const handleGuardarEntrada = (entrada) => {
        console.log("guardado de entrada");
        
    } 


  return (
    <div className="container">
       <PeliculasToolbar /> 
       <Toast ref={toast} />
        <div className="row">
            <div className="col">
                <FormularioCompraEntrada guardarEntrada={handleGuardarEntrada} />
            </div>
            <div className="col">
                <EntradaTable/>
            </div>
        </div>
    </div>
  )
}

export default PeliculasContainer