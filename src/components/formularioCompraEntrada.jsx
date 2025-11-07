import {React, useState} from 'react'
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { SelectButton } from 'primereact/selectbutton';
import { InputText } from 'primereact/inputtext';
import { ListBox } from 'primereact/listbox';

function FormularioCompraEntrada({guardarEntrada}) {
    const dias = ['Lunes','Martes','Miercoles','Jueves','viernes']
    const cartelera = ['Wifi Ralph','Dragon Ball Super Broly','Cascanueces','El Grinch']
    const [pelicula,setPelicula] = useState(null)
    const [ciudad,setCiudad] = useState(null)
    const [diaElegido, setDiaElegido] = useState(null)
    const opcionesPago = ['Efectivo','Tarjeta']
    const [tipoPago,setTipoPago] = useState(opcionesPago[0])
    const [cantidadEntradas,setCantidadEntradas] = useState(0)
    const handleClick = ()=> {
        console.log("hola");
        
    }

  return (
    <div className="card mt-2">
        <form>
            <h1>Formulario de entradas</h1>
            <div className="mt-2">
                <Dropdown value={diaElegido} onChange={(e) => setDiaElegido(e.value)} options={dias} optionLabel="dia" placeholder="Selecciona un dia" className="w-full md:w-14rem" />
            </div>
            <div className="mt-2">
                <SelectButton value={tipoPago} onChange={(e) => setTipoPago(e.value)} options={opcionesPago} />
            </div>
            <div className="mt-2">
                <InputNumber value={cantidadEntradas} onValueChange={(e) => setCantidadEntradas(e.value)} min={0} />

            </div>
            <div className="mt-2">
                <InputText value={ciudad} onChange={(e) => setCiudad(e.target.value)} />
            </div>
            <div className="mt-2">
                <ListBox value={pelicula} onChange={(e) => setPelicula(e.value)} options={cartelera} optionLabel="cartelera" className="w-full md:w-14rem" />
            </div>
            

        
            
        </form>
    </div>

  )
}

export default FormularioCompraEntrada