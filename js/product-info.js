let articulo = localStorage.getItem('articuloID');
const articulo_URL = `https://japceibal.github.io/emercado-api/products/${articulo}.json`

const articulo_comment_URL = `https://japceibal.github.io/emercado-api/products_comments/${articulo}.json`
let comentarios = [];
let art = [];

function mostrarInfoArticulo(product){
    let fotos = "";
    for (let i=0; i < product.images.length; i++){
        fotos += `
        <div class="carousel-item ${i==0?"active":""}">
            <img src="${product.images[i]}" class="d-block w-100"/>
        </div>`
    }
    let info = `<br><br><h1>${product.name}</h1>
    <br> <hr>
    <h4><strong>Precio</strong></h4>
    <p>${product.currency} ${product.cost}</p>
    <br>
    <h4><strong>Descripción</strong></h4>
    <p>${product.description}</p>
    <br> 
    <h4><strong>Categoría</strong></h4>
    <p>${product.category}</p>
    <br> 
    <h4><strong>Cantidad de vendidos</strong></h4>
    <p>${product.soldCount}</p>
    <br> 
    <h4><strong>Imágenes ilustrativas</strong></h4>
    <br>    
    `
    document.getElementById('infos').innerHTML = info;
    document.querySelector('#carouselExampleControls .carousel-inner').innerHTML = fotos;

}

function show_comments(comentarios){
    let cant_comentarios = "";
    for (let comentario of comentarios){
        cant_comentarios += 
        `
        <div class="list-group-item list-group-item-action">
        <div class="row">
            <div class="col">
                <div class="d-flex w-100 justify-content-between">
                    <div class="mb-1">
                    <h4> ${comentario.user} - <span class="Yap"> ${comentario.dateTime} - ${star(comentario.score)}</span></h4> 
                    <p> ${comentario.description} </p>
                    </div>
                </div>

            </div>
        </div>
    </div>
    </div>
    `
    }
    document.getElementById('commentss').innerHTML = cant_comentarios;
    
}

function setArticuloID(id) {
    localStorage.setItem("articuloID", id);
    window.location = "product-info.html"
}

function show_Art_Rel(articulos){
    let cant_Art = "";
    for (let articulo of articulos.relatedProducts){
        cant_Art += 
        // contenedor-imagenes css de las imágenes
        `
        <div onclick="setArticuloID('${articulo.id}')"  role="button" class="list-group-item list-group-item-action contenedor-imagenes"> 
        <img src=" ${articulo.image} ">
        <p><strong> ${articulo.name}</strong> </p> 
            </div>
        `
    }
    document.getElementById('rel').innerHTML = cant_Art;
    
}

function agregar_Comentario(){
    let dato={}
    let horario = new Date();
    let anio = horario.getFullYear();
    let mes = horario.getMonth();
    let dia = horario.getDay();
    let hora = horario.getHours();
    let minutos = horario.getMinutes();
    let segundos = horario.getSeconds();
    let fecha = anio + "-" + mes + "-" + dia + " " + hora + ":" + minutos + ":" + segundos;
    let usuario = JSON.parse(localStorage.getItem('item'));
    dato.description = document.getElementById('comentario').value;
    dato.score = document.getElementById('puntaje').value;
    dato.user = usuario.mail;
    dato.dateTime = fecha;
    comentarios.push(dato);
    document.getElementById('comentario').value="";
    document.getElementById('puntaje').value="";
    show_comments(comentarios);
}



document.addEventListener("DOMContentLoaded", ()=>{
    getJSONData(articulo_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            art = resultObj.data;
            mostrarInfoArticulo(resultObj.data);
            show_Art_Rel(resultObj.data);
            console.log(art)
        }
    });
    getJSONData(articulo_comment_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            comentarios = resultObj.data;
            show_comments(comentarios);
        }
    });
    document.getElementById("btnbtn").addEventListener("click", ()=>{
        agregar_Comentario();
    });
    document.getElementById("comprar").addEventListener("click", ()=>{
        let compra={};
        compra.image = art.images[0];
        compra.name = art.name;
        compra.cost = art.cost;
        compra.currency = art.currency;
        compra.count = art.soldCount;
        let infoToCart = JSON.parse(localStorage.getItem('Acompra'));
        if (infoToCart == null){
            infoToCart = [];
        }
        infoToCart.push(compra)
        localStorage.setItem('Acompra', JSON.stringify(infoToCart));
        location.href = "cart.html";
    });
});

function star(score){
    let estrella=``
    for(let i=0; i<5; i ++){
        if(i<score){
            estrella += `<i class="fas fa-star checked"></i>`
        }else{
            estrella += `<i class="fas fa-star"></i>`
        }
    }
    return estrella;
}
