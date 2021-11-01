// Iniciamos con JS para el movimiento de icon bars
// Trabajando con id de icon-menu del icons bars,
// Creacion de una clase en addeventlistenner clase mostrar_menu
document.getElementById("icon-menu").addEventListener("click", mostrar_menu);

// Realizacion de una funcion
function mostrar_menu(){
    // Relacon de la caja que contiene la portada,article y footer que esta como un id 
    document.getElementById("move-content").classList.toggle('move-container-all');
}