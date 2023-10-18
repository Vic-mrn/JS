
//Valores para el prompt
var frases = ["Nombre del empleado", "Departamento del empleado", "Sueldo diario", "Antiguedad", "Dias trabajados"]
//Gurada los datos recibidos
var datos = []

//Ciclo para los prompt
// for (var x = 0; x < 5; x++) {
//     datos[x] = prompt(frases[x])
// }

//Matriz que almacena los datos de la tabla
//var guardarDatos = [[]];

//Funcion obtenerDatos
function obtenerDatos() {
    var x = document.getElementById("nombre").value;
}

function crearTabla() {
    var table = document.createElement("table");
    for (var i = 0; i < 2; i++) {
        var row = document.createElement("tr");

        for (var j = 0; j < 8; j++) {
            var cell = document.createElement("td");
            cell.className = "segment"; // Agregar la clase 'segment' a todas las celdas
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    document.body.appendChild(table);
}

function crearTabla2() {
    var table = document.createElement("table");
    for (var i = 0; i < 1; i++) {
        var row = document.createElement("tr");

        for (var j = 0; j < 8; j++) {
            var cell = document.createElement("td");
            cell.className = "segment"; // Agregar la clase 'segment' a todas las celdas
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    document.body.appendChild(table);
}

crearTabla();

//var encabezados = ["Nombre", "Depto.", "Sueldo diario", "Antiguedad", "Dias trabajados", "Subtotal", "Bono", "Total"];




