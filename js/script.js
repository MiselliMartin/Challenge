var textoEncriptar = document.getElementById("encriptar");
var textoEncriptado = document.getElementById("encriptado");
var mensajeEncriptado = ''
var botonEncriptar = document.getElementById("botonEncriptar");
var botonDesencriptar = document.getElementById("botonDesencriptar");
var botonCopiar = document.getElementById("botonCopiar");
var botonPegar = document.getElementById("botonPegar");
var nadaCopiar = document.getElementById("nadaCopiar");
var nadaEncriptar = document.getElementById("nadaEncriptar");
var nadaDesencriptar = document.getElementById("nadaDesencriptar");
var pTextArea = document.getElementById("pTextArea");
var imgTextArea = document.getElementById("iTextArea");
var textoCopiado = ''

function reemplazoPorLetra(letra) {
    switch (letra) {
      case 'a':
        return 'ai';
      case 'e':
        return 'enter';
      case 'i':
        return 'imes';
      case 'o':
        return 'ober';
      case 'u':
        return 'ufat';
      default:
        return letra;
    }
  }
  
  function encriptar() {
    if (textoEncriptar.value == '') {
      nadaEncriptar.style.display = 'block'
      nadaDesencriptar.style.display = 'none'
    } else {
      mensajeEncriptado = textoEncriptar.value.replace(/[aeiou]/g, reemplazoPorLetra);
      textoEncriptado.value = mensajeEncriptado
      nadaCopiar.style.display = 'none'
      nadaDesencriptar.style.display = 'none'
      nadaEncriptar.style.display = 'none'
      pTextArea.style.visibility = 'hidden'
      imgTextArea.style.visibility = 'hidden'
      pTextArea.style.display = 'none'
      imgTextArea.style.display = 'none'
      return mensajeEncriptado;
    }
  }
//function encriptar() {
    //mensajeEncriptado = textoEncriptar.value.replace(/[a]/g, 'ai');
    //mensajeEncriptado = mensajeEncriptado.replace(/[e]/g, 'enter');
    //mensajeEncriptado = mensajeEncriptado.replace(/[i]/g, 'imes');
    //mensajeEncriptado = mensajeEncriptado.replace(/[o]/g, 'ober');
    //mensajeEncriptado = mensajeEncriptado.replace(/[u]/g, 'ufat');
//
    //return mensajeEncriptado
//}

function limpiarTextoEncriptar() {
    textoEncriptar.setAttribute('placeholder', '');
    textoEncriptar.focus();
}

function reemplazoDeLetra(letra) {
  switch (letra) {
    case 'ai':
      return 'a';
    case 'enter':
      return 'e';
    case 'imes':
      return 'i';
    case 'ober':
      return 'o';
    case 'ufat':
      return 'u';
    default:
      return letra;
  }
}

function desencriptar() {
  if (textoEncriptar.value == '') {
    nadaDesencriptar.style.display = 'block'
    nadaEncriptar.style.display = 'none'
  } else {
    mensajeEncriptado = textoEncriptar.value.replace(/ai|enter|imes|ober|ufat/g, reemplazoDeLetra);
    textoEncriptado.value = mensajeEncriptado
    nadaCopiar.style.display = 'none'
    nadaDesencriptar.style.display = 'none'
    nadaEncriptar.style.display = 'none'
    pTextArea.style.visibility = 'hidden'
    imgTextArea.style.visibility = 'hidden'
    pTextArea.style.display = 'none'
    imgTextArea.style.display = 'none'
    return mensajeEncriptado;
  }
}

function copiarTexto() {
  if (textoEncriptado.value == '') {
    nadaCopiar.style.display = 'block'
  } else {
    var texto = textoEncriptado
    texto.select();
    document.execCommand('copy');
    botonPegar.style.display = 'block'
    textoCopiado = texto
    nadaCopiar.style.display = 'none'
    pTextArea.style.display = 'none'
    imgTextArea.style.display = 'none'
    
  }
}

function pegarTexto() {
  textoEncriptar.value = ''; 
  textoEncriptar.value = textoEncriptado.value
  textoEncriptado.value = '';
  textoEncriptar.focus(); 
  botonPegar.style.display = 'none'
  pTextArea.style.visibility = 'visible'
  imgTextArea.style.visibility = 'visible'
  pTextArea.style.display = 'block'
  imgTextArea.style.display = 'block'
}

textoEncriptar.addEventListener("keydown", function(event) {
    var tecla = event.key;
    if ((/^[a-z\s]$/.test(tecla) && !/[áéíóú]/.test(tecla)) || tecla === "Backspace" || tecla === '?' || tecla === '!' || tecla === '¡' || tecla === '¿' ) {
      // Permitir el ingreso de letras minúsculas y espacios sin acentos
      return true;
    } else {
      // Evitar el ingreso de cualquier otro caracter
      event.preventDefault();
      return false;
    }
  });

textoEncriptar.addEventListener('blur', function() {
    if (textoEncriptar.value === '' || textoEncriptar.value.trim() === '') {;
      textoEncriptar.setAttribute('placeholder', "Ingrese aquí su texto a encriptar...");
    };
  });


textoEncriptar.onclick = limpiarTextoEncriptar;
botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiarTexto;
botonPegar.onclick = pegarTexto;