
var tablero, canvas, codigo;
var teclas={
  UP:38,
  DOWN:40,
  LEFT:37,
  RIGHT:39
};
var fondo = {
  imagenURL : "img/fondo.png",
  imagenOK: false
};
var tifis = {
  x: 100,
  y: 100,
  frenteURL : "img/monito.png",
  frenteOK: false,
  derURL : "img/monito.png",
  derOK : false,
  izqURL : "img/monito.png",
  izqOK : false,
  atrasURL : "img/monito.png",
  atrasOK : false,
  velocidad: 50
};
function inicio(){
  canvas = document.getElementById("canvas");
  tablero = canvas.getContext("2d");
  fondo.imagen = new Image();
  fondo.imagen.src = fondo.imagenURL;
  fondo.imagen.onload = confirmarFondo;
  tifis.frente = new Image();
  tifis.frente.src = tifis.frenteURL;
  tifis.frente.onload = confirmarFrente;
  tifis.atras = new Image();
  tifis.atras.src = tifis.atrasURL;
  tifis.atras.onload = confirmarAtras;
  tifis.izq = new Image();
  tifis.izq.src = tifis.izqURL;
  tifis.izq.onload = confirmarIzq;
  tifis.der = new Image();
  tifis.der.src = tifis.derURL;
  tifis.der.onload = confirmarDer;
  document.addEventListener("keydown",teclado);
}

function teclado(datos){
  codigo = datos.keyCode;
  if(codigo==teclas.UP)
  {
    tifis.y -= tifis.velocidad;
    if(comprobarPosicion())
    {
      tifis.y += tifis.velocidad;
    }
  }
  if(codigo==teclas.DOWN)
  {
    tifis.y += tifis.velocidad;
    if(comprobarPosicion())
    {
      tifis.y -= tifis.velocidad;
    }
  }
  if(codigo==teclas.RIGHT)
  {
    tifis.x += tifis.velocidad;
    if(comprobarPosicion())
    {
        tifis.x -= tifis.velocidad;
    }
  }
  if(codigo==teclas.LEFT)
  {
    tifis.x -= tifis.velocidad;
    if(comprobarPosicion())
    {
      tifis.x += tifis.velocidad;
    }
  }
  dibujar();
}
function confirmarLiz(){
  liz.lizOK = true;
  dibujar();
}
function dibujar(){
  if(fondo.imagenOK){
    tablero.drawImage(fondo.imagen,0,0);
  }
    
  tablero.drawImage(tifis.frente,tifis.x,tifis.y);
  if(tifis.frenteOK && tifis.atrasOK && tifis.derOK && tifis.izqOK){
    if(codigo==teclas.UP)
    {
      tablero.drawImage(tifis.atras,tifis.x,tifis.y);
    }
    if(codigo==teclas.DOWN)
    {
      tablero.drawImage(tifis.frente,tifis.x,tifis.y);
    }
    if(codigo==teclas.RIGHT)
    {
      tablero.drawImage(tifis.der,tifis.x,tifis.y);
    }
    if(codigo==teclas.LEFT)
    {
      tablero.drawImage(tifis.izq,tifis.x,tifis.y);
    }
  }
}
function confirmarFondo(){
  fondo.imagenOK = true;
  dibujar();
}
function confirmarFrente(){
  tifis.frenteOK = true;
  dibujar();
}
function confirmarAtras(){
  tifis.atrasOK = true;
  dibujar();
}
function confirmarIzq(){
  tifis.izqOK = true;
  dibujar();
}
function confirmarDer(){
  tifis.derOK = true;
  dibujar();
}
function movimiento(){
  tifis.x += 10;
  dibujar();
}

function comprobarPosicion(){
  if(tifis.x >= 0 && tifis.x <= 450 && tifis.y >= 0 && tifis.y <= 450){
    if(tifis.x==200){
      switch (tifis.y) {
        case 0:
        return true;
        break;
        case 50:
        return true;
        break;
        case 100:
        return true;
        break;
        case 150:
        return true;
        break;
        case 200:
        return true;
        break;
      }
    }
    if(tifis.y==350){
      switch (tifis.x) {
        case 150:
        return true;
        break;
        case 200:
        return true;
        break;
        case 250:
        return true;
        break;
        case 300:
        return true;
        break;
        case 350:
        return true;
        break;
        case 400:
        return true;
        break;
        case 450:
        return true;
        break;
      }
    }
    if(tifis.y==200){
      switch (tifis.x) {
        case 0:
        return true;
        break;
        case 50:
        return true;
        break;
        case 100:
        return true;
        break;
      }
    }
    return false;
  }else{
  return true;
}
}