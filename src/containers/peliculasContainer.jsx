import { useEffect, useRef, useState } from "react";

import React from 'react'
import { Toast } from 'primereact/toast';
import PeliculasToolbar from "../components/PeliculasToolbar";
import FormularioCompraEntrada from "../components/formularioCompraEntrada";
import EntradaTable from "../components/entradaTable";
import { guardarEntradas,obtenerEntradas } from "../services/entradasService";


function PeliculasContainer() {
    const toast = useRef(null)
    const [entradas,setEntradas] = useState([])
    const handleGuardarEntrada = (entrada) => {
        if (!entrada){
            toast.current.show({ severity: 'danger', summary: 'Info', detail: 'Datos inexistentes' });
        }
        if ( entrada.cantidad <= 0){
            toast.current.show({ severity: 'danger', summary: 'Info', detail: 'Las cantidad de entradas deben ser mayor a 0!!' });
        }
        if (entrada.ciudad == null || entrada.ciudad == ''){
            toast.current.show({ severity: 'danger', summary: 'Info', detail: 'Debe escribir una ciudad' });
        }
        guardarEntradas(entrada)
        console.log(entrada)
        
    } 
    useEffect(
        ()=>{
            setEntradas(obtenerEntradas)
        },[]
    )


  return (
    <div className="container">
       <PeliculasToolbar /> 
       <Toast ref={toast} />
        <div className="row">
            <div className="col">
                <FormularioCompraEntrada guardarEntrada={handleGuardarEntrada} />
            </div>
            <div className="col">
                <EntradaTable entradas={entradas}/>
            </div>
        </div>
    </div>
  )
}

export default PeliculasContainer