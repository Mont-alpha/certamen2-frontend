import {React, useState} from 'react'
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { SelectButton } from 'primereact/selectbutton';
import { InputText } from 'primereact/inputtext';
import { ListBox } from 'primereact/listbox';
import { Button } from 'primereact/button';

function FormularioCompraEntrada({guardarEntrada}) {
    const dias = ['Lunes','Martes','Miercoles','Jueves','viernes']
    const cartelera = ['Wifi Ralph','Dragon Ball Super Broly','Cascanueces','El Grinch']
    const [pelicula,setPelicula] = useState(null)
    const [ciudad,setCiudad] = useState('')
    const [diaElegido, setDiaElegido] = useState(null)
    const opcionesPago = ['Efectivo','Tarjeta']
    const [tipoPago,setTipoPago] = useState(opcionesPago[0])
    const [cantidadEntradas,setCantidadEntradas] = useState(0)
    const handleClick = ()=> {
        const entradafinal = [{pelicula,ciudad,dia:diaElegido,tipoPago,cantidad:cantidadEntradas}]    
        guardarEntrada(entradafinal)
    }

  return (
    <div className="card mt-2">
            <h1>Formulario de entradas</h1>
            <div className="mt-2 flex flex-column">
                <label htmlFor="dias" className="font-bold block mb-2">Elegir dia</label>
                <Dropdown id='dias' value={diaElegido} onChange={(e) => setDiaElegido(e.value)} options={dias} optionLabel="dia" placeholder="Selecciona un dia" className="w-full md:w-14rem" />
            </div>
            <div className="mt-2 flex flex-column">
                <label htmlFor="metodoPago" className="font-bold block mb-2">seleccione metodo pago</label>
                <SelectButton id='metodoPago' value={tipoPago} onChange={(e) => setTipoPago(e.value)} options={opcionesPago} />
            </div>
            <div className="mt-2 flex flex-column">
                <label htmlFor="withoutgrouping" className="font-bold block mb-2">Eliga cantidad de entradas</label>
                <InputNumber value={cantidadEntradas} onValueChange={(e) => setCantidadEntradas(e.value)} min={0} />

            </div>
            <div className="mt-2 flex flex-column">
                <label htmlFor="ciudad">Escriba su ciudad</label>
                <InputText id='ciudad' value={ciudad} onChange={(e) => setCiudad(e.target.value)} />
            </div>
            <div className="mt-2 flex flex-column">
                <Dropdown value={pelicula} onChange={(e) => setPelicula(e.value)} options={cartelera} optionLabel="cartelera" className="w-full md:w-14rem" />
            </div>
            <Button className='mt-2' label="Guardar entrada" onClick={handleClick()}/>
    </div>

  )
}

export default FormularioCompraEntrada