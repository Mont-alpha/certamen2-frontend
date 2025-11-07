import React, { useEffect,useState } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

function EntradaTable(entradasGuardadas) {
const [entradas, setEntradas] = useState([]);
useEffect(()=>{
    setEntradas([{code:1}])
},[])
  return (
    <DataTable value={entradas} tableStyle={{ minWidth: '50rem' }}>
    <Column field="code" header="Code"></Column>
    </DataTable>  
    
  )
}

export default EntradaTable