function login (){
    let usuario = {}
     usuario.mail = document.getElementById("email").value;
     usuario.contraseña = document.getElementById("contraseña").value;

    if (usuario.mail != "" && usuario.contraseña != ""){
        
        localStorage.setItem('item', JSON.stringify(usuario));
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
