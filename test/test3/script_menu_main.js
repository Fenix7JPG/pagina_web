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




//Abrir menú carrito
function openCartSide() {
    console.log("Abriendo menú");
    document.getElementById("cart_side").classList.add("show");
}

// Cerrar menú carrito
document.querySelector(".cart_side_header").addEventListener("click", () => {
    console.log("Cerrando menú");
    document.getElementById("cart_side").classList.remove("show");
});



// Mostrar productos en el carrito
function showProduct(idProducto) {

  // Mostrar solo el producto deseado agregando la clase 'show'
  const div = document.getElementById(idProducto);
  div.classList.add("show");
}

