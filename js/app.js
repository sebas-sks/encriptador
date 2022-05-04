//// FUNCIONES USADAS PARA EL PROYECTO DE ENCRIPTACION - CHALLENGE ALURA N°1 ////
var btnEncriptar = document.querySelector("#btnEncriptar");
var btnDesencriptar = document.querySelector("#btnDesencriptar");
var btnCopiar = document.querySelector("#btnCopiar");

btnEncriptar.addEventListener("click",encriptar);
btnDesencriptar.addEventListener("click", desencriptar);
btnCopiar.addEventListener("click", copy);
// Aqui capturamos y le decimos a los botones que funcion deben ejecutar
//al momento que el usuario haga click

function capturarVerificar(){
    var txt = document.getElementById("txtEncriptar").value.toLowerCase();
    if(txt != ""){
        ocultarContenido();
        return txt;
    }
}
//Funcion para verificar que lo escrito por el usuario no sea nulo y ademas
//evitar las mayusculas

function ocultarContenido(){
    var txtDesencriptar = document.getElementById("txtDesencriptar");
    var img = document.getElementById("imgFoto");
    var p = document.getElementById("label1");
    var label =document.getElementById("label2");
    var btnCopiar =document.getElementById("btnCopiar");        
    img.style.display = "none";
    p.style.display = "none";
    label.style.display = "none";
    btnCopiar.style.display = "block";
    txtDesencriptar.style.display = "block"
}
//Funcion cuyo objetivo es ocultar los elementos que no son necesarios 
//una vez puesta en marcha la aplicacion y asi mismo mostrar lo que 
//son necesarios

function encriptar(){
    var txt = capturarVerificar();    
    var ltr;
    var frase = "";    
    for(var i = 0; i<txt.length; i++){                    
        switch (txt.charAt(i)) {
            case "a":
                ltr = txt.charAt(i).replace("a", "ai");                                                                                    
                break;
            case "e":
                ltr = txt.charAt(i).replace('e', 'enter');                             
                break;                            
            case "i":
                ltr = txt.charAt(i).replace('i', 'imes'); 
                
            break;
            case "o":
                ltr = txt.charAt(i).replace('o', 'ober');                             
            break;
            case "u":
                ltr = txt.charAt(i).replace('u', 'ufat');                             
            break;
            default:
                ltr = txt.charAt(i);                            
                break;
        }         
        frase = frase + ltr;                
    }            
    mostrarResultado(frase);
}

//Toma la frase a encriptar, la descompone letra a letra buscando y reemplazando las vocales
//para al final reagrupar la frase ya procesada, al final la mostramos el resultado en pantalla 

function desencriptar(){    
    var text = capturarVerificar();
    var frase = "";
    frase = text.replace(/enter/igm, "e");
    frase = frase.replace(/ober/igm , "o");
    frase = frase.replace(/imes/igm , "i");
    frase = frase.replace(/ai/igm , "a");
    frase = frase.replace(/ufat/igm , "u");

    mostrarResultado(frase);
}

//Funcion que toma la frase encriptada y busca por todas las palabras que contengan las palabras encriptadas y las 
//regresa a su estado original

function mostrarResultado(txt){    
    document.getElementById("txtEncriptar").value = "";
    document.getElementById("txtDesencriptar").value = txt;
}

//funcion cuyo objetivo es mostrar los resultados obtenidos de las anteriores funciones

function copy(){
    var textoCopiar = document.getElementById("txtDesencriptar");                
    textoCopiar.select();
    textoCopiar.setSelectionRange(0, 99999);
    document.execCommand('copy');
}

//Funcion para copiar el contenido resultante.