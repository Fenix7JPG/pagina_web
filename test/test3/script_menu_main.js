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
    document.getElementById("container_cart_side").classList.add("show");
}

// Cerrar menú carrito
document.querySelector(".cart_side_header").addEventListener("click", () => {
    console.log("Cerrando menú");
    document.getElementById("container_cart_side").classList.remove("show");
});


const products = [
  // =========================
  // PROMOCIONES (10)
  // =========================
  {id:1, title:'Mega Banquete Navideño', desc:'1 pollo entero + 1/2 pollo + papas familiares + ensalada familiar + 2 gaseosas 1.5L', price:139.90, img:'../../assets/promo_mega_navidad.jpg', category:'Promociones'},
  {id:2, title:'Navidad Familiar', desc:'1 pollo entero + papas familiares + ensalada clásica + gaseosa 1.5L', price:69.90, img:'../../assets/promo_navidad_familiar.jpg', category:'Promociones'},
  {id:3, title:'Combo Brasa Doble', desc:'2 medios pollos + papas familiares + 2 gaseosas 500ml', price:74.90, img:'../../assets/promo_doble_brasa.jpg', category:'Promociones'},
  {id:4, title:'Promo Fin de Año', desc:'1 pollo entero + chaufa familiar + papas medianas', price:72.00, img:'../../assets/promo_fin_ano.jpg', category:'Promociones'},
  {id:5, title:'Pack Amigos', desc:'1 pollo entero + 6 alitas + papas familiares', price:78.90, img:'../../assets/promo_amigos.jpg', category:'Promociones'},
  {id:6, title:'Promo Delivery Navidad', desc:'1/2 pollo + papas medianas + gaseosa 1L', price:39.90, img:'../../assets/promo_delivery_navidad.jpg', category:'Promociones'},
  {id:7, title:'Combo Pareja', desc:'1/2 pollo + papas medianas + ensalada + 2 gaseosas 500ml', price:42.90, img:'../../assets/promo_pareja.jpg', category:'Promociones'},
  {id:8, title:'Promo 2x1 Alitas', desc:'Compra 6 alitas y llévate otras 6 gratis', price:29.90, img:'../../assets/promo_alitas_2x1.jpg', category:'Promociones'},
  {id:9, title:'Promo Cuarto Brasa', desc:'1/4 pollo + papas + gaseosa 500ml', price:19.90, img:'../../assets/promo_cuarto.jpg', category:'Promociones'},
  {id:10, title:'Promo Familiar Express', desc:'1 pollo entero + papas grandes (sin bebida)', price:59.90, img:'../../assets/promo_express.jpg', category:'Promociones'},

  // =========================
  // POLLO (3)
  // =========================
  {id:11, title:'Pollo entero a la brasa', desc:'Pollo completo a la brasa, ideal para 3 a 4 personas', price:65.00, img:'../../assets/pollo_entero.jpg', category:'Pollo'},
  {id:12, title:'1/2 Pollo a la brasa', desc:'Medio pollo jugoso acompañado de guarnición', price:36.00, img:'../../assets/medio_pollo.jpg', category:'Pollo'},
  {id:13, title:'1/4 Pollo a la brasa', desc:'Cuarto de pollo con papas fritas individuales', price:18.50, img:'../../assets/cuarto_pollo.jpg', category:'Pollo'},

  // =========================
  // GUARNICIONES (8)
  // =========================
  {id:14, title:'Papas fritas individuales', desc:'Porción personal, crujiente y dorada', price:8.00, img:'../../assets/papas_individual.jpg', category:'Guarniciones'},
  {id:15, title:'Papas fritas medianas', desc:'Porción mediana para compartir', price:15.00, img:'../../assets/papas_mediana.jpg', category:'Guarniciones'},
  {id:16, title:'Papas fritas familiares', desc:'Porción grande ideal para familia', price:25.00, img:'../../assets/papas_familiar.jpg', category:'Guarniciones'},
  {id:17, title:'Ensalada clásica', desc:'Lechuga, tomate, zanahoria y aderezo', price:10.50, img:'../../assets/ensalada_clasica.jpg', category:'Guarniciones'},
  {id:18, title:'Arroz chaufa pequeño', desc:'Porción pequeña estilo chaufa', price:12.00, img:'../../assets/chaufa_pequeno.jpg', category:'Guarniciones'},
  {id:19, title:'Arroz chaufa familiar', desc:'Porción familiar para compartir', price:22.00, img:'../../assets/chaufa_familiar.jpg', category:'Guarniciones'},
  {id:20, title:'Papas crocantes especiales', desc:'Papas sazonadas con especias de la casa', price:11.00, img:'../../assets/papas_especiales.jpg', category:'Guarniciones'},

  // =========================
  // BEBIDAS (10)
  // =========================
  {id:21, title:'Inca Kola 1.5L', desc:'Gaseosa sabor nacional 1.5 litros', price:9.90, img:'../../assets/inca_1_5l.jpg', category:'Bebidas'},
  {id:22, title:'Coca-Cola 1.5L', desc:'Gaseosa Coca-Cola 1.5 litros', price:9.90, img:'../../assets/coca_1_5l.jpg', category:'Bebidas'},
  {id:23, title:'Inca Kola 500ml', desc:'Botella personal 500 ml', price:4.50, img:'../../assets/inca_500.jpg', category:'Bebidas'},
  {id:24, title:'Coca-Cola 500ml', desc:'Botella personal 500 ml', price:4.50, img:'../../assets/coca_500.jpg', category:'Bebidas'},
  {id:25, title:'Sprite 500ml', desc:'Gaseosa lima-limón', price:4.50, img:'../../assets/sprite_500.jpg', category:'Bebidas'},
  {id:26, title:'Fanta 500ml', desc:'Gaseosa sabor naranja', price:4.50, img:'../../assets/fanta_500.jpg', category:'Bebidas'},
  {id:27, title:'Agua mineral sin gas 500ml', desc:'Agua mineral helada', price:2.50, img:'../../assets/agua_sin_gas.jpg', category:'Bebidas'},
  {id:28, title:'Agua mineral con gas 500ml', desc:'Agua mineral gasificada', price:3.00, img:'../../assets/agua_con_gas.jpg', category:'Bebidas'},
  {id:29, title:'Chicha morada 1L', desc:'Chicha morada tradicional', price:6.00, img:'../../assets/chicha_1l.jpg', category:'Bebidas'},
  {id:30, title:'Limonada 1L', desc:'Limonada fresca de la casa', price:6.00, img:'../../assets/limonada_1l.jpg', category:'Bebidas'},

  // =========================
  // EXTRAS (5)
  // =========================
  {id:32, title:'Salsa extra (ají / huacatay)', desc:'Porción adicional de salsa', price:1.50, img:'../../assets/salsa_extra.jpg', category:'Extras'},
  {id:33, title:'Aros de cebolla', desc:'Porción de aros empanizados', price:12.00, img:'../../assets/aros_cebolla.jpg', category:'Extras'},
  {id:34, title:'Nuggets de pollo (6)', desc:'Nuggets crocantes con salsa', price:12.90, img:'../../assets/nuggets.jpg', category:'Extras'},
  {id:35, title:'Pan con chimichurri', desc:'Pan artesanal con chimichurri', price:4.00, img:'../../assets/pan_chimi.jpg', category:'Extras'},
  {id:36, title:'Porción de ensalada extra', desc:'Ensalada adicional para acompañar', price:7.00, img:'../../assets/ensalada_extra.jpg', category:'Extras'}
];
const cart = [];


const cartContainer = document.querySelector('.cart_items');
const cartTpl = document.getElementById('cart_item');
function showProduct(productId) {
  const product = products.find(p => p.id == productId);
  if (!product) return;

  const itemInCart = cart.find(i => i.id === product.id);

  
  if (itemInCart) {
    itemInCart.qty++;
  } else {
    
    cart.push({
      id: product.id,
      title: product.title,
      price: product.price,
      img: product.img,
      qty: 1
    });
  }

  renderCart();
  scrollToCartItem(product.id);
}



function renderCart() {
  cartContainer.innerHTML = '';

  cart.forEach(item => {
    const node = cartTpl.content.cloneNode(true);

    node.querySelector('.cart_item').dataset.id = item.id;
    node.querySelector('.cart_item_img img').src = item.img;
    node.querySelector('.cart_item_title').textContent = item.title;
    node.querySelector('.cart_item_price').textContent = "P.Unit.: S/ " +item.price;
    node.querySelector('.cart_item_subtotal').textContent = "Subtotal: S/" + item.price * item.qty;


    const qtySpan = node.querySelector('.cart_item_controls span');
    qtySpan.textContent = item.qty;


    const btnMinus = node.querySelector(".cart_button_minus")
    const btnPlus = node.querySelector(".cart_button_plus")

    const btnRemove = node.querySelector('.cart_item_x button');

    // ➕
    btnPlus.textContent = '+';
    btnPlus.addEventListener('click', () => {
      item.qty++;
      renderCart();
      scrollToCartItem(item.id);
    });

    // ➖
    btnMinus.textContent = '−';
    btnMinus.addEventListener('click', () => {
      item.qty--;
      if (item.qty <= 0) {
        removeItem(item.id);
      }
      renderCart();
      scrollToCartItem(item.id);
    });

    // ❌
    btnRemove.addEventListener('click', () => {
      removeItem(item.id);
      renderCart();
      
    });

    cartContainer.appendChild(node);
    
  });
  updateCartTotal();
}
function removeItem(id) {
  const index = cart.findIndex(i => i.id === id);
  if (index !== -1) {
    cart.splice(index, 1);
  }
}

function scrollToCartItem(productId) {
  const el = cartContainer.querySelector(
    `.cart_item[data-id="${productId}"]`
  );

  if (!el) return;

  el.scrollIntoView({
    behavior: 'smooth',
    block: 'nearest'
  });
  highlightCartItem(productId);
}


function highlightCartItem(productId) {
  const el = cartContainer.querySelector(
    `.cart_item[data-id="${productId}"]`
  );

  const button_cart = document.getElementById('button_cart');

  if (!el) return;

  el.classList.add('highlight');
  button_cart.classList.add('highlight');

  setTimeout(() => {
    el.classList.remove('highlight');
    button_cart.classList.remove('highlight');
  }, 700);

}


const btnCheckout = document.getElementById('btn_checkout');
const cartTotalEl = document.getElementById('cart_total_price');
updateCartTotal()
function updateCartTotal() {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  cartTotalEl.textContent = `S/ ${total.toFixed(2)}`;
  btnCheckout.disabled = cart.length === 0;
}



const btn = document.getElementById('btn_checkout');
const modal = document.getElementById('container_checkout_modal');

btn.addEventListener('click', () => {
    console.log("Finalizando pedido")
    modal.classList.add('show');
});


function clearCart() {
  cart.length = 0;          // vacía el array
  renderCart();             // re-renderiza
}

document.getElementById('btn_finalizar_pedido')
  .addEventListener('click', () => {
    const select1 = document.getElementById("order_type");
    const select2 = document.getElementById("address_input");
    const select3 = document.getElementById("payment_method");

    if (select1.value === "") {
        alert("Debe seleccionar un tipo de entrega");
        return;
    }
    if (select2.value == "") {
        alert("Debe ingresar una dirección");
        return;
    }
    if (select3.value == "") {
        alert("Debe ingresar un metodo de pago")
        return;
    }


    clearCart();
    modal.classList.remove("show")
  });




