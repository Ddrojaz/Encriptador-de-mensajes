
/* Verifica que el texto ingresado no tenga letras mayúsculas, caracteres especiales, como se pide en la consiga.- */

function validarTexto (texto) {
    
    let especiales = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;
    let mayusculas = /[A-Z]/g;  
    let vacio = "";  
      
    if (texto.match(mayusculas) || texto.match(especiales)) {
    
        document.querySelector("#mensaje").value = "";
        alert ("Se ingreso un carácter especial o una letra mayúscula");
        return true; 
    
    }
    else if (texto == vacio) {
        
        alert ("No se ingreso ningún mensaje");
        return true;
   
    }
    else {
        
        return false;

    }
}

/* Encripta el mensaje escrito.- */

function encriptar (txtIngresado) {
    
    let txtEncriptado = "";
    
    for (const obj in reglas) {
        
        txtEncriptado = txtIngresado.replaceAll(obj,reglas[obj]);
        txtIngresado = txtEncriptado;        
    
    }
    
    return (txtEncriptado);
}

/* Desencripta el mensaje.- */

function desencriptar (txtIngresado) {

    let txtDesencriptado = "";
    
    for (const obj in reglas) {
        
        txtDesencriptado = txtIngresado.replaceAll(reglas[obj],obj);
        txtIngresado = txtDesencriptado;        
    }
    return (txtDesencriptado);

}

/* Boton encriptar.- */

const reglas = { "e":"enter","i":"imes","a":"ai","o":"ober","u":"ufat"};

let botonEncriptar = document.querySelector("#btn-encriptar");

botonEncriptar.addEventListener ("click", function() {

    let txtIngresado = document.querySelector("#ingresarTxt").value;
    let txt = txtIngresado;
   
    if (validarTexto (txt) == false) {       
        
        let encriptado = encriptar(txt);
        let verificacion = document.querySelector("#mensaje");
        verificacion.value = encriptado;
        alert ("Mensaje encriptado con éxito");

    } 
    
    else {        
        
        textInput = "";     
     
    }
      
})

/* Boton copiar.- */

let btnCopiar = document.querySelector("#btn-copiar");

btnCopiar.addEventListener ("click",function() {        
    
    let copiado = document.querySelector("#mensaje").value;
    let vacio = "";

    navigator.clipboard.writeText(copiado);
    document.querySelector("#ingresarTxt").value = "";
    document.querySelector("#mensaje").value = "";
    
    if (copiado == vacio) {

        alert ("No se ingreso ningún mensaje")

    }
    else {

        alert ("Mesaje copiado");

    }

})

/* Boton desencriptar.- */

let btnDesencriptar = document.querySelector("#btn-desencriptar");

btnDesencriptar.addEventListener ("click", function() {
    
    let textoIngresado = document.querySelector("#ingresarTxt").value;
    let desencriptado = desencriptar(textoIngresado);
    let vacio = "";
    let resultado = document.querySelector("#mensaje");

    if (desencriptado == vacio) {

        alert ("No se ingreso ningún mensaje");

    }
    else {

        resultado.value = desencriptado;
        alert ("Mensaje desencriptado con éxito");

    }
})

/* Boton refrescar pantalla.- */

let btnRefrescar = document.querySelector("#btn-refresco");

btnRefrescar.addEventListener ("click", function() {

    document.querySelector("#ingresarTxt").value = "";
    document.querySelector("#mensaje").value = "";

})
