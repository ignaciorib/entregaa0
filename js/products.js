let catID = localStorage.getItem("catID"); // recibimos del localstorage el catID para qué JSON interpretar en el URL.
const listado = `https://japceibal.github.io/emercado-api/cats_products/${catID}.json`; //En la zona del url que identifica el catID de los JSON, pongo el objeto cats con su respectivo catID para generalizarlo dependiendo de qué local storage se abrirá (101, 102, 103, 104, ect).
let lista = [];

function filtrarBarra(){
    let buscar = document.getElementById("buscar"); // Creamos la variable, que será el elemento del input.
    const texto = buscar.value.toLowerCase(); // Creamos la constante texto para acceder al valor de la variable anterior y con tolowercase lo pasamos a minuscula.
    let listilla = "";
    for(let articulo of lista){
        let title = articulo.title.toLowerCase();
        let genres = articulo.genres.toLowerCase();
        let tagline = articulo.tagline.toLowerCase();
        let vote = articulo.description.toLowerCase();
        if((nombre.indexOf(texto) && desc.indexOf(texto)) !== -1){ //filtramos los resutlados del array con el nombre y la descripción de cada art.
            listilla += 
            ` <div class="list-group-item list-group-item-action">
                    <div class="row">
                        <div class="col-3">
                            <img src="` + articulo.image + `" alt="product image" class="img-thumbnail">
                            </div>                                                                               
                            <h4>`+ articulo.name + " - " + articulo.currency + " " + articulo.cost  +`</h4> 
                            <p> `+ articulo.description +`</p> 
                        </div>
                        <small class="text-muted">` + articulo.soldCount + ` artículos vendidos</small> 
                    </div>

                </div>
            `

            

        }
    }
    document.getElementById('listaDeArticulos').innerHTML = listilla;
    

}


function filtrar() {
    let min = parseInt(document.getElementById("minimo").value);
    let max = parseInt(document.getElementById("maximo").value);
    let articulosF = lista.filter(listita => listita.cost >= min && listita.cost <= max );
    articulosF.sort((ant,sig)=>ant.cost-sig.cost);
    show_listArticulos(articulosF);
    console.log(articulosF);
}

function ascendente() {
    let list = lista
    list.sort((a, b)=>a.cost-b.cost);
    console.log(list);
    show_listArticulos(list);

}

function descendente() {
    let list = lista
    list.sort((a, b)=>b.cost-a.cost);
    console.log(list);
    show_listArticulos(list);

}

function descendenteRel() {
    let list = lista
    list.sort((a, b)=>b.soldCount-a.soldCount);
    console.log(list);
    show_listArticulos(list);

}

function setArticuloID(id) {
    localStorage.setItem("articuloID", id);
    window.location = "product-info.html"
}

function show_listArticulos(articulos){
    let listaArticulos = "";
    for (let articulo of articulos){
        listaArticulos += 
        ` <div class="list-group-item list-group-item-action">
        <div onclick="setArticuloID('${articulo.id}')" class="list-group-item list-group-item-action cursor-active">
        <div class="row">
            <div class="col-3">
                <img src="` + articulo.image + `" alt="product image" class="img-thumbnail">
            </div>
            <div class="col">
                <div class="d-flex w-100 justify-content-between">
                    <div class="mb-1">
                    <h4>`+ articulo.name + " - " + articulo.currency + " " + articulo.cost  +`</h4> 
                    <p> `+ articulo.description +`</p> 
                    </div>
                    <small class="text-muted">` + articulo.soldCount + ` artículos vendidos</small> 
                </div>

            </div>
        </div>
    </div>
    </div>
    `
    }
    document.getElementById('listaDeArticulos').innerHTML = listaArticulos;
    
}



document.addEventListener("DOMContentLoaded", ()=>{
    getJSONData(listado).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            lista = resultObj.data.products;
            show_listArticulos(lista);
        }
    });

    document.getElementById("arriba").addEventListener("click", ()=>{
            ascendente();
    });

    document.getElementById("abajo").addEventListener("click", ()=>{
        descendente();
    });

    document.getElementById("rel").addEventListener("click", ()=>{
        descendenteRel();
    });
    
    document.getElementById("filtro").addEventListener("click", ()=>{
        filtrar();
    });

    document.getElementById("clearRangeFilter").addEventListener("click", ()=>{
        show_listArticulos(lista);
    });

    document.getElementById("buscar").addEventListener("keyup", ()=>{
        filtrarBarra();
    });
});
