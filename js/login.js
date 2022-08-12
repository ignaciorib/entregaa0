function login (){
    let mail = document.getElementById("email").value;
    let contraseña = document.getElementById("contraseña").value;

    if (mail != "" && contraseña != ""){
        location.href = "index.html";
    } else {
        alert("¡Usuario y clave son requeridos!");
    }
}


document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('button').addEventListener('click', ()=>{
        login();
    })
})