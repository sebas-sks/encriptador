//// FUNCIONES USADAS PARA EL PROYECTO DE ENCRIPTACION - CHALLENGE ALURA N°1 ////
function saltarlinea(){
    document.write("<br><br><br><br><br>");    
}
//Realiza saltos de linea para separar contenido

function copiar(){                
    var textoCopiar = document.getElementById("txtDesencriptar");                
    textoCopiar.select();
    textoCopiar.setSelectionRange(0, 99999);
    document.execCommand('copy');
}                              
//Funcion para copiar el contenido resultante de la encriptacion.

function capturar(){                
    var textoEncriptar = document.getElementById("textoEncriptar").value.toLowerCase();                
    if(textoEncriptar != ""){                                                            
        ocultarContenido();
        var frase = encriptar(textoEncriptar);
        document.getElementById("txtDesencriptar").value = frase; 
        document.getElementById("textoEncriptar").value = "";
    }                                    
}  
//La funcion captura el valor digitado por el usuario, lo convertimos a minusculas en caso de 
//que se haya insertado una mayuscula, verificamos que no este vacia la variable,
//si tiene información ejecutamos la funcion que oculta el contenido no necesario
//enviamos el texto a encriptar, para luego recibir el resultado y mostrarselo al usuario

function capturarDesencriptar(){                
    var textoEncriptar = document.getElementById("textoEncriptar").value.toLowerCase();                
    if(textoEncriptar != ""){                                                            
        ocultarContenido();
        var frase = desencriptar(textoEncriptar);
        document.getElementById("txtDesencriptar").value = frase; 
        document.getElementById("textoEncriptar").value = "";
    }                                    
}  
//Funcion para desencriptar el contenido, tiene el mismo funcionamiento que la encriptacion
var text;


function encriptar (text){
    var ltr;
    var frase = "";
    for(var i = 0; i<text.length; i++){                    
        switch (text.charAt(i)) {
            case "a":
                ltr = text.charAt(i).replace("a", "ai");                                                                                    
                break;
            case "e":
                ltr = text.charAt(i).replace('e', 'enter');                             
                break;                            
            case "i":
                ltr = text.charAt(i).replace('i', 'imes'); 
                
            break;
            case "o":
                ltr = text.charAt(i).replace('o', 'ober');                             
            break;
            case "u":
                ltr = text.charAt(i).replace('u', 'ufat');                             
            break;
            default:
                ltr = text.charAt(i);                            
                break;
        }         
        frase = frase + ltr;                
    }    
    return frase;
}

//Toma la frase a encriptar, la descompone letra a letra buscando y reemplazando las vocales
//para al final reagrupar la frase ya procesada, al final la retornamos

function desencriptar(text){    
    var frase = "";
    frase = text.replace(/enter/igm, "e");
    frase = frase.replace(/ober/igm , "o");
    frase = frase.replace(/imes/igm , "i");
    frase = frase.replace(/ai/igm , "a");
    frase = frase.replace(/ufat/igm , "u");

    return frase;

    //var arr = text.split(" ");
    //console.log(arr);
    
    //var frase = " "; 
    //var cadena = "";
    
    /*
    for(var i = 0; i < arr.length; i++){
        cadena = arr[i].replace(/enter/g, "e");
        cadena = cadena.replace(/ober/g , "o");
        cadena = cadena.replace(/imes/g , "i");
        cadena = cadena.replace(/ai/g , "a");
        cadena = cadena.replace(/ufat/g , "u");
        frase = frase + " " + cadena;
    }*/
}
//Funcion que toma la frase encriptada y busca por todas las palabras que contengan las palabras encriptadas y las 
//regresa a su estado original

function ocultarContenido(){
    var img = document.getElementById("imagen");
    var label1 = document.getElementById("label1");
    var label2 = document.getElementById("label2");
    var txtDesencriptar = document.getElementById("txtDesencriptar");
    img.style.visibility = "collapse";
    label1.style.visibility = "collapse";
    label2.style.visibility = "collapse";
    txtDesencriptar.style.visibility = "visible";
    txtDesencriptar.style.marginTop = "";               
}
//Funcion para ocultar el contenido y mostrar el espacio donde se muestra la frase desencriptada 
//y el boton copiar
