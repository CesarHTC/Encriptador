function encriptar() {
    let texto = document.getElementById("texto").value;
    texto = texto.toLowerCase();
    texto = texto.replace(/e/g, "enter");
    texto = texto.replace(/i/g, "imes");
    texto = texto.replace(/a/g, "ai");
    texto = texto.replace(/o/g, "ober");
    texto = texto.replace(/u/g, "ufat");

    document.getElementById("resultado").textContent = "Mensaje Encriptado: " + texto;
    
  }


  function desencriptar() {
    let texto = document.getElementById("texto").value;
    texto = texto.replace(/enter/g, "e");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ufat/g, "u");

    document.getElementById("resultado").textContent = "Mensaje Desencriptado: " + texto;
    
  } 


  function alerta() {
    alert("hola joto");
  }