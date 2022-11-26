function mostrarDatos(){
    let infouser = JSON.parse(localStorage.getItem('infouser'))
    if (infouser != null){
    document.getElementById('nombre').value = infouser.nombre
    document.getElementById('nombre2').value = infouser.nombre2
    document.getElementById('apellido').value = infouser.apellido
    document.getElementById('apellido2').value = infouser.apellido2
    document.getElementById('tel').value= infouser.tel
}
}

document.addEventListener('DOMContentLoaded', ()=>{
    let usuario = JSON.parse(localStorage.getItem('user'));
    document.getElementById('email').value= usuario.mail

    document.getElementById("guardar").addEventListener("click", ()=>{
        let nombre = document.getElementById('nombre').value;
        let apellido = document.getElementById('apellido').value;
        let tel = document.getElementById('tel').value;

    if(nombre != "" && apellido != "" && tel != ""){
        let infoUsuario = {};
        infoUsuario.nombre = document.getElementById('nombre').value;
        infoUsuario.nombre2 = document.getElementById('nombre2').value;
        infoUsuario.apellido = document.getElementById('apellido').value;
        infoUsuario.apellido2 = document.getElementById('apellido2').value;
        infoUsuario.tel = document.getElementById('tel').value;
        localStorage.setItem('infouser', JSON.stringify(infoUsuario))
    }
});
    mostrarDatos()
});
