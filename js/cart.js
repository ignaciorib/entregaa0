const CART_URL = "https://japceibal.github.io/emercado-api/user_cart/25801.json";
let subc = document.getElementsByName('envio');
let cart = [];
let papelera = document.getElementsByName('borrar')

function show_Compra(cart){;
    let compra = "";
    for (let product of cart[0]){ 
     compra += `    <tr>
                    <td><img src=${product.image} width=80></td>
                    <td>${product.name}</td>
                    <td class="cost">${product.cost}</td>
                    <td><input onchange="cuentas()" type="number" name="amount" style="width:50px" value="1" min="0"></td>
                    <td id="subtotal" class="subtotales"><strong> ${product.cost}</strong></td>
                    <td><img src="img/papelera.png" type="button" name="borrar" width=30>   </td>
                    </tr>

    `
    }
    document.getElementById('nuevaCompra').innerHTML = compra;
    cuentas();

    for (let i=0; i< papelera.length; i++){
    papelera[i].addEventListener('click',()=>{
        eliminar(i);
    })
   
}

}
function eliminar(lugar){
    cart[0].splice(lugar,1);
    show_Compra(cart)

}


function cuentas() {
    let inputs = document.getElementsByTagName('input');
    let cost = document.getElementsByClassName('cost');
    let subtotales = document.getElementsByClassName('subtotales');
    let total = 0;

    for(let i=0; i< cost.length; i++){
    total += parseFloat(cost[i].innerHTML) * parseFloat(inputs[i].value);
    subtotales[i].innerHTML="<strong>" + parseFloat(cost[i].innerHTML) * parseFloat(inputs[i].value) + "<strong>";
    }
    costoSubc=0;
    for (let x=0; x< subc.length; x++){
        if (subc[x].checked){
        costoSubc = total * parseFloat(subc[x].value);
    }
    console.log(costoSubc)
}
    //let totalD = total / 40;
    //let costoSubcD = costoSubc / 40;
    let totalisimo = total + costoSubc;
document.getElementById('sub').innerHTML = (total).toFixed(2);
document.getElementById('subC').innerHTML = (costoSubc).toFixed(2);
document.getElementById('total').innerHTML = (totalisimo).toFixed(2)
}

function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function validacionComprar(){

    let tarjeta = document.getElementById('opt1');
    let bancaria = document.getElementById('opt2');
    let card = document.getElementById('card');
    let codigo = document.getElementById('codigo');
    let vencimiento = document.getElementById('vencimiento');
    let account = document.getElementById('account');
    let calle = document.getElementById('calle').value;
    let esquina = document.getElementById('esquina').value;
    let numero = document.getElementById('numero').value;

    if (calle!=null && esquina !=null && numero !=null && (tarjeta.checked === true || bancaria.checked===true) && ((card !=null && codigo !=null && vencimiento != null) || account != null)){
        showAlertSuccess();
    }
}

function validacion(){
    let tarjeta = document.getElementById('opt1');
    let bancaria = document.getElementById('opt2');
    let card = document.getElementById('card');
    let codigo = document.getElementById('codigo');
    let vencimiento = document.getElementById('vencimiento');
    let account = document.getElementById('account');
    if(tarjeta.checked){
        card.disabled=false
        codigo.disabled=false
        vencimiento.disabled=false
        account.disabled=true
    } else {
        card.disabled=true
        codigo.disabled=true
        vencimiento.disabled=true
        account.disabled=false
    }

    if(tarjeta.checked){
        validity = true;
        document.getElementById("span").innerHTML = "Tarjeta de crédito";
    } else if (bancaria.checked){
        validity = true;
        document.getElementById("span").innerHTML = "Transferencia bancaria";
    }
    if(!tarjeta.checked && !bancaria.checked){
        validity = false;
        document.getElementById("btn-pago").classList.add("invalido");
        document.getElementById("span").innerHTML = "Debe seleccionar un método de pago válido";
    }
}




document.addEventListener("DOMContentLoaded", ()=>{
    var forms = document.querySelectorAll('.needs-validation')
            Array.prototype.slice.call(forms)
            .forEach(function (form) {
            form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
             event.preventDefault()
            event.stopPropagation()
            
            }

            form.classList.add('was-validated')
             }, false)
            });
            let Acompra = JSON.parse(localStorage.getItem('Acompra'));
            if (Acompra !== null){
            cart.push(Acompra);
            console.log(cart);
            show_Compra(cart)
            };
            for (let i=0; i< subc.length; i++){
                subc[i].addEventListener('click',()=>{
                    cuentas();
                })
               
            };
            document.getElementById('opt1').addEventListener('click',()=>{
                validacion();
            });
            document.getElementById('opt2').addEventListener('click',()=>{
                validacion();
            });
            document.getElementById('comprar').addEventListener('click',()=>{
                validacionComprar();
            });
            
});   