const API = 'https://rickandmortyapi.com/api/character/';
const API_LOCATION = 'https://rickandmortyapi.com/api/location/';
const container = document.getElementById('container');

const fetchData = (url_api, api_dimension) => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', url_api, api_dimension, true); // true es por defecto y activa el asincronismo
        xhttp.onreadystatechange = (() => {
            if(xhttp.readyState === 4){ // solicitud finalizada y respuesta lista
                (xhttp.status === 200) // if ternario
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error('Error ' + url_api, api_dimension))
            }
        })
    
        xhttp.send();
    });
}

const anotherFunction = async (url_api, api_dimension) => {
    try{
        const data = await fetchData(url_api, api_dimension);
        const dimensions = await fetchData(api_dimension);
        
        function print(){
            for (let i = 0; i < data.results.length; i++) {
                container.innerHTML += `
                    <div class="character">
                        <img src="${data.results[i].image}" alt="">
                        <div class="container-name">
                            <h2>${data.results[i].name}</h2>
                        </div>
                    </div>
                `;
            }
        }
        print();
    
    }catch(error){
        console.error(error)
    }
}

anotherFunction(API, API_LOCATION);