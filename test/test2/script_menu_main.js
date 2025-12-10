//Abir menú
function openMenuSide() {
    console.log("Abriendo menú");
    document.getElementById("menu_side").classList.add("show");
}


// Cerrar menú (obsoleto)
//function closeMenuSide() {
//    console.log("Cerrando menú");
//    document.getElementById("menu_side").classList.remove("show");
//}
// Cerrar menú
document.querySelector(".menu_side_header").addEventListener("click", () => {
    console.log("Cerrando menú");
    document.getElementById("menu_side").classList.remove("show");
});

