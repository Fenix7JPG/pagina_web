const products = [
  {id:1, title:'Pollo a la brasa', desc:'Delicioso pollo con papas.', price:12.99, img:'../../assets/pollo.jpg', category:'Pollo'},
  {id:2, title:'Combo Familiar', desc:'Pollo entero + 2 guarniciones + bebidas', price:80, img:'../../assets/combo.jpg', category:'Promociones'},
  {id:3, title:'Papas fritas', desc:'Crujientes y doradas', price:6, img:'../../assets/papas.jpg', category:'Guarniciones'}
];

// contenedores por categoría (los div que ya tenés en HTML)
const containers = {
  'Promociones': document.getElementById('promociones').querySelector('div'),
  'Pollo': document.getElementById('pollo').querySelector('div'),
  'Guarniciones': document.getElementById('guarniciones').querySelector('div'),
  'Bebidas': document.getElementById('bebidas').querySelector('div'),
  'Extras': document.getElementById('extras').querySelector('div')
};

const tpl = document.getElementById('menu_item');

products.forEach(p => {
  const node = tpl.content.cloneNode(true);
  const btn = node.querySelector('button');
  btn.dataset.id = p.id;
  node.querySelector('img').src = p.img;
  node.querySelector('img').alt = p.title;
  node.querySelector('h2').textContent = p.title;
  node.querySelector('p').textContent = p.desc;
  node.querySelector('span').textContent = `S/ ${p.price.toFixed(2)}`;
  
  // agrega al contenedor de la categoría correcta
  containers[p.category].appendChild(node);
});

// manejar clicks
Object.values(containers).forEach(container => {
  container.addEventListener('click', e => {
    const btn = e.target.closest('button.menu_item');
    if(!btn) return;
    showProduct(btn.dataset.id);
  });
});
