const API_URL = "https://restcountries.com/v3.1/";

// const HTMLResponse = document.querySelector('#app')
// const ul = document.createElement('ul')

fetch(`${API_URL}/all`)

const xhr = new XMLHttpRequest();

function onRequestHandler() {
    if (this.readyState === 4 && this.status === 200) {
        // console.log(this.response);  // ESTE COMANDO ES PARA QUE MANDE A LLAMAR TODA LA INFORMACION EN FORMATO TEXTO DE LOS OBJETOS
        const data = JSON.parse(this.response);
        console.log(data);   //ACA PODREMOS VER LA MISMA INFORMACION PERO MEJOR ESTRUCUTRADA POR NODOS PARA LLAMAR A LA INFORMACION DE UNA MANERA MAS SENCIALLA
        // const HTMLResponse = document.querySelector('#app');

        // const tpl = data.map((user) => `<li>${user.name} ${user.email}</li>`)
        // HTMLResponse.innerHTML = `<ul>${tpl}</ul>`
    }
}

xhr.addEventListener("load", onRequestHandler);
xhr.open("GET", `${API_URL}/all`);
xhr.send();


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
            console.log(pais.flag);
            console.log(pais.name.common);
            console.log(pais.population);
            console.log(pais.timezones);
            
            document.getElementById('banderaPais').src = pais.flags.png;
            document.getElementById('nombrePais').innerText = pais.name.common;
            document.getElementById('poblacionPais').innerText = pais.population;
            document.getElementById('capitalPais').innerText = pais.timezones[0];
            document.getElementById('resultado').innerText = 'Fue Encontrado';
            tabla.style.display = '';
        } else {
            document.getElementById('resultado').innerText = 'No se encontro';
        }
    }catch (error) {
        console.log(error);
    }
}

formulario.addEventListener('submit', consultarPais)