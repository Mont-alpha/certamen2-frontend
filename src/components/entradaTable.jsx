import React, { useEffect,useState } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

function EntradaTable(entradasGuardadas) {
const [entradas, setEntradas] = useState([]);
useEffect(()=>{
    setEntradas([{dia:1}])
},[])
  return (
    <DataTable value={entradas} tableStyle={{ minWidth: '50rem' }}>
    <Column field="dia" header="DIA"></Column>
    <Column field="pelicula" header="Película"></Column>
    <Column field="cantidad" header="Cantidad de Entradas"></Column>
    </DataTable>  
    
  )
}

export default EntradaTable