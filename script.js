// Crear una tabla de 8 segmentos
var table = document.createElement("table");
var encabezados = ["Nombre", "Depto.", "Sueldo diario", "Antiguedad", "Dias trabajados", "Subtotal", "Bono", "Total"];

for (var i = 0; i < 2; i++) {
    var row = document.createElement("tr");

    for (var j = 0; j < 8; j++) {
        var cell = document.createElement("td");
        cell.className = "segment"; // Agregar la clase 'segment' a todas las celdas
        row.appendChild(cell);
        if (i==0) {
            cell.textContent = encabezados[j];
        }
    }

    table.appendChild(row);
    

}

table.rows[1].cells[2].textContent = "2";
// Agregar la tabla al cuerpo del documento
document.body.appendChild(table);