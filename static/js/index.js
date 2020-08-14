const API = 'https://rickandmortyapi.com/api/character/';
const container = document.getElementById('container');

const fetchData = (url_api) => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', url_api, true); // true es por defecto y activa el asincronismo
        xhttp.onreadystatechange = (() => {
            if(xhttp.readyState === 4){ // solicitud finalizada y respuesta lista
                (xhttp.status === 200) // if ternario
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error('Error ' + url_api))
            }
        })
    
        xhttp.send();
    });
}

fetchData(API)
    .then(data => {
        //console.log(data.info.count);
        for (let i = 0; i < data.results.length; i++) {
            let dimension = data.results[i].origin.url;
            container.innerHTML += `
                <div class="character" data-dimension="${dimension}">
                    <img class="character-img" src="${data.results[i].image}" alt="">
                    <div class="container-name">
                        <h2>${data.results[i].name}</h2>
                        <p>${data.results[i].species}</p>
                        <p>${data.results[i].gender}</p>
                        <p>${data.results[i].status}</p>
                        <p>${data.results[i].type}</p>
                        <p>${data.results[i].origin.name}</p>
                    </div>
                </div>
            `;
        }
    })
    .catch(err => console.error(err));