
const relogio = setInterval(function time() {

    const horas = document.getElementById("horas");
    const minutos = document.getElementById("minutos");
    const segundos = document.getElementById("segundos");

    let data = new Date();
    let hr = data.getHours();
    let min = data.getMinutes();
    let seg = data.getSeconds();

    if(hr < 10) hr = '0' + hr;
    if(min < 10) min = '0' + min;
    if(seg < 10) seg = '0' + seg; 

    horas.innerHTML = hr;
    minutos.innerHTML = min;
    segundos.innerHTML = seg;
    
    
}); 

