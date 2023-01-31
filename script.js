const botonEncriptar = document.querySelector("#botonEncriptar");
const botonDesencriptar = document.querySelector("#botonDesencriptar");
const botonCopiar = document.querySelector("#botonCopiar");

const areaTextoCodificado = document.querySelector(".textoCodificado");

document.getElementById("mostrandoMensaje").style.display = "none";

botonEncriptar.addEventListener("click",codificar);
botonDesencriptar.addEventListener("click",desencriptar);
botonCopiar.addEventListener("click",copiarTexto);

function copiarTexto(){
    var text_to_copy = document.querySelector(".textoCodificado").innerHTML;

    navigator.clipboard.writeText(text_to_copy).then(
        function(){
            alert("Texto copiado"); // success 
        })
      .catch(
         function() {
            alert("Error al copiar"); // error
      });
}     

function codificar(){
    var textoCopiado = document.querySelector("textarea").value;

    document.getElementById("ningunMensaje").style.display = "none";

    textoCopiado = textoCopiado.replace(/e/g,"enter");
    textoCopiado = textoCopiado.replace(/i/g,"imes");
    textoCopiado = textoCopiado.replace(/a/g,"ai");
    textoCopiado = textoCopiado.replace(/o/g,"ober");
    textoCopiado = textoCopiado.replace(/u/g,"ufat");

    areaTextoCodificado.innerHTML = textoCopiado;

    document.getElementById("mostrandoMensaje").style.display = "block";
}

function desencriptar(){
    var textoCopiado = document.querySelector("textarea").value;

    document.getElementById("ningunMensaje").style.display = "none";

    textoCopiado = textoCopiado.replace(/enter/g,"e");
    textoCopiado = textoCopiado.replace(/imes/g,"i");
    textoCopiado = textoCopiado.replace(/ai/g,"a");
    textoCopiado = textoCopiado.replace(/ober/g,"o");
    textoCopiado = textoCopiado.replace(/ufat/g,"u");

    areaTextoCodificado.innerHTML = textoCopiado;

    document.getElementById("mostrandoMensaje").style.display = "block";
}


/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/