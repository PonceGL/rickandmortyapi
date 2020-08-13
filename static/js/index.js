const API = 'https://rickandmortyapi.com/api/character/';

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
        console.log(data.info.count);
        return fetchData(`${API}${data.results[0].id}`)
    })
    .then(data => {
        console.log(data.name);
        console.log(data.status);
        console.log(data.species);
        console.log(data.type);
        console.log(data.gender);
        console.log(data.origin.name);
        console.log(data.image);
        
        return fetchData(data.origin.url)
    })
    .then(data => {
        console.log(data.dimension);
    })
    .catch(err => console.error(err));