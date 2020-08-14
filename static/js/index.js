const API = 'https://rickandmortyapi.com/api/character/';
const API_LOCATION = `https://rickandmortyapi.com/api/location/1`;
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

fetchData(API)
    .then(data => {
        console.log(data.info.count);
        for (var i = 0; i < data.results.length; i++) {
            container.innerHTML += `
                <div class="character">
                    <img src="${data.results[i].image}" alt="">
                    <div class="container-name">
                        <h2>${data.results[i].name}</h2>
                        <h2>${data.results[i].name}</h2>
                        <p>${data.results[i].species}</p>
                        <p>${data.results[i].gender}</p>
                        <p>${data.results[i].status}</p>
                        <p>${data.results[i].type}</p>
                        <p>${data.results[i].origin.name}</p>
                        <p>${data.results[i].dimension}</p>
                    </div>
                </div>
            `;
            console.log(data.results[i].origin.url);
        }
    })
    // .then(data => {
    //     console.log(data.name);
    //     return fetchData(data.origin.url)
    // })
    // .then(data => {
    //     console.log(data.dimension);
    // })
    .catch(err => console.error(err));











// const anotherFunction = async (url_api, api_dimension) => {
//     try{
//         const data = await fetchData(url_api, api_dimension);
//         // const character = await fetchData(`${API}${data.results[0].id}`);
//         // const dimensions = await fetchData(character.origin.url);
        
//         function print(){
//             for (let i = 0; i < data.results.length; i++) {
//                 container.innerHTML += `
//                     <div class="character">
//                         <img src="${data.results[i].image}" alt="">
//                         <div class="container-name">
//                             <h2>${data.results[i].name}</h2>
//                             <h2>${data.results[i].name}</h2>
//                             <p>${data.results[i].species}</p>
//                             <p>${data.results[i].gender}</p>
//                             <p>${data.results[i].status}</p>
//                             <p>${data.results[i].type}</p>
//                             <p>${data.results[i].origin.name}</p>
//                             <p>${data.results[i].dimension}</p>
//                         </div>
//                     </div>
//                 `;
//                 console.log(data.results[i].origin.url);
//             }
//         }
//         print();
    
//     }catch(error){
//         console.error(error)
//     }
// }

// anotherFunction(API, API_LOCATION);
