const API_URL = "https://restcountries.com/v3.1/";

const xhr = new XMLHttpRequest();

xhr.addEventListener("load", onRequestHandler);

const formulario = document.querySelector('form');
formulario.addEventListener('submit', async (e) => {
    e.preventDefault();
    let nombrePais = formulario.pais.value;
    if (nombrePais === '') {
        alert("Debe ingresar el nombre de un país");
        return;
    }

    const url = `${API_URL}/name/${nombrePais}`;
    const config = {
        method: 'GET'
    };

    document.getElementById('resultado').innerText = 'Buscando el archivo que desea...';

    try {
        const respuesta = await fetch(url, config);
        if (respuesta.status === 200) {
            const data = await respuesta.json();
            const pais = data[0];
            console.log(pais.flag);
            console.log(pais.name.common);
            console.log(pais.region);
            console.log(pais.population);
            console.log(pais.capital[0]);
            
            document.getElementById('banderaPais').src = pais.flags.png;
            document.getElementById('regionPais').innerText = pais.region; 
            document.getElementById('nombrePais').innerText = pais.name.common;
            document.getElementById('poblacionPais').innerText = pais.population;
            document.getElementById('capitalPais').innerText = pais.capital[0];
            document.getElementById('resultado').innerText = 'Fue Encontrado';
            document.querySelector('#tabla1').style.display = 'block';
        } else {
            document.getElementById('resultado').innerText = 'No se encontró';
            document.querySelector('#tabla1').style.display = 'none';
        }
    } catch (error) {
        console.log(error);
    }
});




const formulario2 = document.querySelector('#form');
formulario2.addEventListener('submit', async (e) => {
    e.preventDefault();
    let nombreRegion = formulario2.region.value;

    const url = `${API_URL}/region/${nombreRegion}`;
    const config = {
        method: 'GET'
    };

    try {
        const respuesta = await fetch(url, config);
        if (respuesta.status === 200) {
            const data = await respuesta.json();
            const pais = data[0];
            console.log(pais.region);
            console.log(pais.continents[0]);
            console.log(pais.area);
            console.log(pais.subregion);

            
            document.getElementById('regionPai').innerText = pais.region;
            document.getElementById('areaPais').innerText = pais.area;
            document.getElementById('subregionPais').innerText = pais.subregion;
            document.getElementById('continentePais').innerText = pais.continents[0];
            document.getElementById('resultado').innerText = 'Fue Encontrado';
            document.querySelector('#tabla2').style.display = 'block';
        } else {
            document.getElementById('resultado').innerText = 'No se encontró';
            document.querySelector('#tabla2').style.display = 'none';
        }
    } catch (error) {
        console.log(error);
    }
});




const formulario3 = document.querySelector('#form3');
formulario3.addEventListener('submit', async (e) => {
    e.preventDefault();
    let nombreSubregion = formulario3.subregion.value;

    const url = `${API_URL}/subregion/${nombreSubregion}`;
    const config = {
        method: 'GET'
    };

    try {
        const respuesta = await fetch(url, config);
        if (respuesta.status === 200) {
            const data = await respuesta.json();
            const pais = data[0];
            console.log(pais.population);
            console.log(pais.capitalInfo.latlng);
            console.log(pais.coatOfArms.png);

            
            

            
            document.getElementById('poblacionPais').innerText = pais.population;
            document.getElementById('ubicacionPais').innerText = pais.capitalInfo.latlng;
            document.getElementById('escudo').src = pais.coatOfArms.png;



            document.getElementById('resultado').innerText = 'Fue Encontrado';
            document.querySelector('#tabla3').style.display = 'block';
        } else {
            document.getElementById('resultado').innerText = 'No se encontró';
            document.querySelector('#tabla3').style.display = 'none';
        }
    } catch (error) {
        console.log(error);
    }
});





//PARA REVISAR EN LA CONSOLA LOS NODOS A CONSULTAR
const APIi_URL = "https://restcountries.com/v3.1/";

// const HTMLResponse = document.querySelector('#app')
// const ul = document.createElement('ul')

fetch(`${API_URL}/all`)

const xhrr = new XMLHttpRequest();

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
xhr.open("GET", `${APIi_URL}/all`);
xhr.send();
