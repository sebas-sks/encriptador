function saltarlinea(){
    document.write("<br><br><br><br><br>");
}

function copiar(){                
    var textoCopiar = document.getElementById("txtDesencriptar");                
    textoCopiar.select();
    textoCopiar.setSelectionRange(0, 99999);
    document.execCommand('copy');
}                              

function capturar(){                
    var textoEncriptar = document.getElementById("textoEncriptar").value.toLowerCase();                
    if(textoEncriptar != ""){                                                            
        ocultarContenido();
        var frase = encriptar(textoEncriptar);
        document.getElementById("txtDesencriptar").value = frase; 
        document.getElementById("textoEncriptar").value = "";
    }                                    
}  

function capturarDesencriptar(){                
    var textoEncriptar = document.getElementById("textoEncriptar").value.toLowerCase();                
    if(textoEncriptar != ""){                                                            
        ocultarContenido();
        var frase = desencriptar(textoEncriptar);
        document.getElementById("txtDesencriptar").value = frase; 
        document.getElementById("textoEncriptar").value = "";
    }                                    
}  

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

function desencriptar(text){    
    var arr = text.split(" ");
    console.log(arr);
    
    var frase = " "; 
    var cadena = "";
    for(var i = 0; i < arr.length; i++){
        cadena = arr[i].replace(/enter/g, "e");
        cadena = cadena.replace(/ober/g , "o");
        cadena = cadena.replace(/imes/g , "i");
        cadena = cadena.replace(/ai/g , "a");
        cadena = cadena.replace(/ufat/g , "u");
        frase = frase + " " + cadena;
    }
    
    return frase;
}

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
