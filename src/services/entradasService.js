const key = 'entradas'
const guardarEntradas = (entrada) => {
    const entradasExistentes = [...obtenerEntradas(),entrada]
    
    localStorage.setItem(key,JSON.stringify(entrada));
}

const obtenerEntradas = () => {
    const entradas = JSON.parse(localStorage.getItem(key));
    return entradas;
}

export {guardarEntradas,obtenerEntradas}