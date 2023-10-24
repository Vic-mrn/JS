addEventListener('load', inicio, false);

function inicio(){
    document.getElementById('size').addEventListener('mousemove', cambio, false);
}

function cambio(){
    document.getElementById('textoSize').innerHTML = "Tamaño de la fuente: " + document.getElementById('size').value +"px"; 
}


