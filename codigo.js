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

    document.getElementById('resultado').innerText = 'Buscando el archivo que desea...'

    try {
        const respuesta = await fetch(url, config);
        if(respuesta.status) {
            const data = await respuesta.json();
            const pais = data[0];
            console.log(pais.name.common);
            console.log(pais.population);
            console.log(pais.timezones);
            console.log(pais.flag);

            document.getElementById('nombrePais').innerText = pais.name.common;
            document.getElementById().innerText = pais.population;
            document.getElementById().innerText = pais.timezones[0];
            document.getElementById().innerText = pais.flags.png;
            document.getElementById().innerText = 'Fue Encontrado';
            tabla.style.display = '';
        }
    }
}