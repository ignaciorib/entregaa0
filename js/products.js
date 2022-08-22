const cats = {"Autos":101, "Juguetes":102, "Muebles":103, "Herramientas":104, "Computadoras":105, "Vestimenta":106, "Electrodomésticos":107,"Deporte":108,"Celulares":107}; // Creamos un objeto para darle la correspondencia de los números a las palabras.
let catID = localStorage.getItem("catID"); // recibimos del localstorage el catID para qué JSON interpretar en el URL.
const listado = `https://japceibal.github.io/emercado-api/cats_products/${cats[catID]}.json`; //En la zona del url que identifica el catID de los JSON, pongo el objeto cats con su respectivo catID para generalizarlo dependiendo de qué local storage se abrirá (101, 102, 103, 104, ect).
let lista = [];

function show_listAutos(autos){
    let listaAutos = "";
    for (let auto of autos.products){
        listaAutos += 
        ` <div class="list-group-item list-group-item-action">
        <div class="row">
            <div class="col-3">
                <img src="` + auto.image + `" alt="product image" class="img-thumbnail">
            </div>
            <div class="col">
                <div class="d-flex w-100 justify-content-between">
                    <div class="mb-1">
                    <h4>`+ auto.name + " - " + auto.currency + " " + auto.cost  +`</h4> 
                    <p> `+ auto.description +`</p> 
                    </div>
                    <small class="text-muted">` + auto.soldCount + ` artículos vendidos</small> 
                </div>

            </div>
        </div>
    </div>
    `
    }
    document.getElementById('listaDeAutos').innerHTML = listaAutos;
    
}

document.addEventListener("DOMContentLoaded", ()=>{
    getJSONData(listado).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            lista = resultObj.data;
            show_listAutos(lista);
        }
    });
});