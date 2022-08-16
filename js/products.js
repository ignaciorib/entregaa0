const listado = "https://japceibal.github.io/emercado-api/cats_products/101.json"
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