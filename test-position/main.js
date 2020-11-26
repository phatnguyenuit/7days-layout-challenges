const parent = document.querySelector('.parent');
const children = document.querySelector('.children');

function inspect_children_position() {
  const children_meta = document.getElementById('children-meta');
  children_meta.innerHTML = `(${children.offsetLeft}, ${children.offsetTop})`;

  const viewport_meta = document.getElementById('children-viewport-meta');
  const viewport_rect = children.getBoundingClientRect();
  viewport_meta.innerHTML = `(${viewport_rect.left}, ${viewport_rect.top})`;
}

window.addEventListener('resize', inspect_children_position);
window.addEventListener('load', inspect_children_position);
