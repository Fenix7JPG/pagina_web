

// contenedores por categoría (los div que ya tenés en HTML)
const containers = {
  'Promociones': document.querySelector('#promociones .menu_items'),
  'Pollo': document.querySelector('#pollo .menu_items'),
  'Guarniciones': document.querySelector('#guarniciones .menu_items'),
  'Bebidas': document.querySelector('#bebidas .menu_items'),
  'Extras': document.querySelector('#extras .menu_items'),
};

const tpl = document.getElementById('menu_item');

products.forEach(p => {
  const container = containers[p.category];
  if (!container) return;

  const node = tpl.content.cloneNode(true);
  const btn = node.querySelector('button');

  btn.dataset.id = p.id;
  node.querySelector('img').src = p.img;
  node.querySelector('img').alt = p.title;
  node.querySelector('h2').textContent = p.title;
  node.querySelector('p').textContent = p.desc;
  node.querySelector('span').textContent = `S/ ${p.price.toFixed(2)}`;

  container.appendChild(node);
});


Object.values(containers).forEach(container => {
  container.addEventListener('click', e => {
    const btn = e.target.closest('.menu_item');
    if (!btn) return;
    console.log(btn.dataset.id)
    showProduct(btn.dataset.id);
  });
});

