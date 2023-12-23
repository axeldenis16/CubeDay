const imagenes = ["https://axeldenis16.github.io/fraseES.svg", "https://axeldenis16.github.io/fraseCA.svg", "https://axeldenis16.github.io/fraseEN.svg", "https://axeldenis16.github.io/fraseFR.svg", "https://axeldenis16.github.io/fraseGR.svg"]; // Agrega las URL de tus imágenes modificadas aquí
let indice = 0;
const imgElement = document.getElementById('imagenCambiante');

function cambiarImagen() {
    imgElement.src = imagenes[indice];
    indice = (indice + 1) % imagenes.length;
}

setInterval(cambiarImagen, 3000); // Cambiar cada 3 segundos (3000 milisegundos)
