const API ="https://rickandmortyapi.com/api/character";


const getData =(apiUrl) => {
    
    return fetch(apiUrl)
    .then(response => response.json())
     .then(json =>  {
        printData(json)
        printPagination(json.info)
     }
        )
        /*console.log("json-->",json)*/

        //cacht de errores clean asf jeje

    .catch(error =>{console.error('El error es',error) })

}
const printData = (data) => {
    
    let html ='';
data.results.forEach(p => {
    html += '<div class="col';
    html += '<div class="card" style="width: 15rem;" >' ;
    html += `<img class="card-img-top" src="${p.image}" alt="Card image cap">`
    html += '<div class="card-body" >' ;
    html+=  `<h5 class="card-title">${p.name}</h5>`
    html+=  `<p class="card-text">Genero: ${p.gender}</p> `
    html+=  `<p class="card-text">Especie: ${p.species}</p> `
    html+=  `<p class="card-text">Estado: ${p.status}</p> `
    html += '</div>' ;
    html += '</div>' ;
    html += '</div>' ;
    });
document.getElementById('infocharacters').innerHTML = html

}

const printPagination = (info) =>{
    let predisable =info.prev == null ? 'disabled' : '';
    let nextdisable =info.next == null ? 'disabled' : '';
    let html=`<li class="page-item  ${predisable}"><a class="page-link" onclick="getData('${info.prev}')">Previous</a></li> `
    html+= `<li class="page-item ${nextdisable}" > <a class="page-link" onclick="getData('${info.next}')">Next</a> </li>`
document.getElementById('paginacion').innerHTML=html;
}

getData(API);
