//Primer se crean las constantes que se van a utulizar
const formulario = document.querySelector('form')
const tabla = document.querySelector('table')

const consultarPais = async (e) => {
    e.preventDefault();
    let nombrePais = formulario.pais.value;
    if(nombrePais === ''){
        alert("Debe ingresar el nombre de un pais");
        return;
    }

    const url=`https://restcountries.com/v3.1/name/${nombrePais}`;
    const config = {
        method: 'GET'
    };
}