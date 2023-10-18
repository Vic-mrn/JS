//Valores para el prompt
var frases = ["Nombre del empleado", "Departamento del empleado", "Sueldo diario", "Antiguedad", "Dias trabajados"]
//Gurada los datos recibidos
var datos = []

//Funcion obtenerDatos


var encabezados = ["Nombre", "Depto.", "Sueldo diario", "Antiguedad", "Dias trabajados", "Subtotal", "Bono", "Total"];
var table = document.createElement("table");

function crearEncabezado() {

    for (var i = 0; i < 1; i++) {
        var row = document.createElement("tr");

        for (var j = 0; j < 8; j++) {
            var cell = document.createElement("td");
            cell.className = "segmento"; // Agregar la clase 'segment' a todas las celdas
            row.appendChild(cell);
            cell.textContent = encabezados[j];
        }
        table.appendChild(row);
    }
    document.body.appendChild(table);
}

function empleado() {
    //Manejamos los valores
    datos[0] = document.getElementById("nombre").value;
    datos[1] = document.getElementById("depto").value;
    datos[2] = document.getElementById("sueldo").value;
    datos[3] = document.getElementById("ant").value;
    datos[4] = document.getElementById("dias").value;

    datos[5] = datos[4] * datos[2];

    if (datos[3] > 15) {
        datos[6] = datos[5] * 0.30;
    } else {
        datos[6] = datos[5] * 0.15;
    }

    datos[7] = datos[5] + datos[6];


    for (var i = 0; i < 1; i++) {
        var row = document.createElement("tr");

        for (var j = 0; j < 8; j++) {
            var cell = document.createElement("td");
            cell.className = "segmento"; // Agregar la clase 'segment' a todas las celdas
            row.appendChild(cell);
            cell.textContent = datos[j];
        }
        table.appendChild(row);
    }
}

function borrar() {
    document.getElementById("nombre").value = "";
    document.getElementById("depto").value = "";
    document.getElementById("sueldo").value = "";
    document.getElementById("ant").value = "";
    document.getElementById("dias").value = "";
}

crearEncabezado();