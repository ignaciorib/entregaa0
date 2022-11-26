document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
    
});

document.addEventListener("DOMContentLoaded", ()=>{
    let usuario = JSON.parse(localStorage.getItem('user'));

    if (usuario== null){  
        location.href="login.html";
    } else {
        document.getElementById('maili').innerHTML= usuario.mail;
    }
})
cerrar.addEventListener("click", () => {
    localStorage.clear();
    location. reload();
  });
