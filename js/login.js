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
    document.getElementById('formulario').addEventListener('submit', (event)=>{
        // event es un parametro que recibe submit, que tiene todos los eventos de ese submit, luego usamos el preventDefault que evita la propagacion del submit(es decir enviar el formulario por naturaleza de html)
     event.preventDefault()
        login();
    })
})
