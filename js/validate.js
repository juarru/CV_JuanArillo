/**
 * Created by juan_arillo on 16/7/17.
 */

/* Contact Form validation */

var form = document.getElementsByTagName('form')[0];

var emailInput = document.getElementById('email');
var contactNumberInput = document.getElementById('cont_number');
var moreInput = document.getElementById('more')


form.addEventListener('submit', function (event) {
    if(emailInput.checkValidity() === false){
        alert("Introduce un email correcto");
        emailInput.focus();
        event.preventDefault();
        return false;
    }
    if(contactNumberInput.checkValidity() === false){
        alert("El número de contacto introducido no es correcto. Debe de tener nueve dígitos");
        contactNumberInput.focus();
        event.preventDefault();
        return false;
    }
    if(moreInput.value.split(" ").length > 150){
        alert("El número de palabras es mayor del permitido, ciento cincuenta");
        contactNumberInput.focus();
        event.preventDefault();
        return false;
    }

})