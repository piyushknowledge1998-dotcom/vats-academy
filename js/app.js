const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
menuBtn?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => {
  nav?.classList.remove('open');
  menuBtn?.setAttribute('aria-expanded', 'false');
}));

const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.course-card');
function applyFilter(value){
  cards.forEach(card => card.classList.toggle('hidden', value !== 'all' && card.dataset.category !== value));
  filters.forEach(btn => btn.classList.toggle('active', btn.dataset.filter === value));
}
filters.forEach(btn => btn.addEventListener('click', () => applyFilter(btn.dataset.filter)));
document.querySelectorAll('[data-filter-link]').forEach(link => link.addEventListener('click', () => applyFilter(link.dataset.filterLink)));
