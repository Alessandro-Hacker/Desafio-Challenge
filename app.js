const btnEncriptar = document.getElementById('encriptar');
const btnDesencriptar = document.getElementById('desencriptar');
const btnCopiar =  document.getElementById('copiar');
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
    const encriptado = encriptar(contenido);
    txtrespuesta.value  = encriptado;
    txtmensaje.value= "";
    activarRespuesta();
  }
  
}

function onDesencriptar() {
  let contenido = txtmensaje.value;
  if(contenido != ''){
    const desencriptar =  desEncriptar(contenido);
    txtrespuesta.value  = desencriptar;
    txtmensaje.value = "";
    activarRespuesta();
  }
  
}

function onCopiar(){
  if(txtrespuesta.value!= ''){
    
    try{
      let copytext = document.getElementById('txtRespuesta');
      copytext.select();
      document.execCommand('copy');
      alert('Texto copiado al portapeles');
    }catch(err){
      console.error('Error al copiar el texto',err);
    }
    txtrespuesta.value = '';
    activarImagen();
  }
}

//Funcion para encriptar en texto
function encriptar(stringEncriptado){
	let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
	for(let i=0; i < matrizCodigo.length ; i++){
		if(stringEncriptado.includes(matrizCodigo[i][0])){
			stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
		}
	}
	
	return stringEncriptado;
	
}

// funcion para desencriptar el texto
function desEncriptar(stringDesencriptado){
	let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
	for(let i=0; i < matrizCodigo.length ; i++){
		if(stringDesencriptado.includes(matrizCodigo[i][1])){
			stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
		}
	}
	
	return stringDesencriptado;
	
}


// AGREGANDO EVENTOS A LOS BOTONES.
btnCopiar.addEventListener('click',onCopiar);

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