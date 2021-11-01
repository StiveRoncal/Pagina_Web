// Iniciamos con JS para el movimiento de icon bars
// Trabajando con id de icon-menu del icons bars,
// Creacion de una clase en addeventlistenner clase mostrar_menu
document.getElementById("icon-menu").addEventListener("click", mostrar_menu);

// Realizacion de una funcion
function mostrar_menu(){
    // Relacon de la caja que contiene la portada,article y footer que esta como un id 
    document.getElementById("move-content").classList.toggle('move-container-all');

    // Trabajando con Class imaginaria de Css de show-lateral y crecion de id en caja de menu de los enlazes
    // Proceso es caja de enlaces donde esta un id y luego el toggle con la clase imaginaria  de css
    document.getElementById("show-menu").classList.toggle('show-lateral')
}