const encriptar = document.getElementById('encriptar');
const desencriptar = document.getElementById('desencriptar');
const copiar =  document.getElementById('copiar');
const txtmensaje =  document.getElementById('txtMensaje');
const txtrespuesta = document.getElementById('txtRespuesta');


function activarRespuesta() {
  // Oculta el primer elemento con la clase 'img_mensaje'
  const imgMensaje = document.querySelector('.img_mensaje');
  if (imgMensaje) imgMensaje.style.display = 'none';
  
  // Muestra el primer elemento con la clase 'respuesta_boton'
  const respuestaBoton = document.querySelector('.respuesta_boton');
  if (respuestaBoton) respuestaBoton.style.display = 'flex';
}

function activarImagen(){
  // Oculta el primer elemento con la clase 'img_mensaje'
  const imgMensaje = document.querySelector('.img_mensaje');
  if (imgMensaje) imgMensaje.style.display = 'inline';
  
  // Muestra el primer elemento con la clase 'respuesta_boton'
  const respuestaBoton = document.querySelector('.respuesta_boton');
  if (respuestaBoton) respuestaBoton.style.display = 'none';
}

function onEncriptar() {
  let contenido = txtmensaje.value;
  if(contenido != ''){
    txtrespuesta.value  = contenido;
    txtmensaje.value= "";
    activarRespuesta();
  }
  
}

function onDesencriptar() {
  let contenido = txtmensaje.value;
  if(contenido != ''){
    txtrespuesta.value  = contenido;
    txtmensaje.value = "";
    activarRespuesta();
  }
  
}

function onCopiar(){
  let contenido  = txtmensaje.value;
  if(contenido != ''){
    activarImagen();
  }
}

function encriptarMensaje(StringMensaje){
  const matriz  = [["a",""],["e",""],["i",""],["o",""],["u",""]];
}


function desencriptarMensaje(StringMensaje){
  const matriz  = [["a",""],["e",""],["i",""],["o",""],["u",""]];
}

// AGREGANDO EVENTOS A LOS BOTONES.
encriptar.addEventListener('click', onEncriptar);
desencriptar.addEventListener('click', onDesencriptar);
copiar.addEventListener('click',activarImagen);

//Evento para que la seccion2 se expanda.
document.addEventListener("DOMContentLoaded", function() {
  const seccion2 = document.querySelector(".seccion_2");
  const respuestaBoton = document.querySelector(".respuesta_boton");

  function expandSection() {
    seccion2.classList.add("expanded");
    respuestaBoton.classList.add("expanded");
    respuestaBoton.style.display = "flex";
  }

  encriptarButton.addEventListener("click", expandSection);
  desencriptarButton.addEventListener("click", expandSection);
});