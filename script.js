function scrollToLeft() {
    document.getElementById('carousel').scrollBy({ left: -200, behavior: 'smooth' });
  }
  function scrollRight() {
    document.getElementById('carousel').scrollBy({ left: 200, behavior: 'smooth' });
  }
  
  const carousel = document.querySelector('.carousel');
let isDown = false;
let startX;
let scrollLeft; // só uma vez aqui!

// Mouse events
carousel.addEventListener('mousedown', (e) => {
  isDown = true;
  carousel.classList.add('active');
  startX = e.pageX - carousel.offsetLeft;
  scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener('mouseleave', () => {
  isDown = false;
  carousel.classList.remove('active');
});

carousel.addEventListener('mouseup', () => {
  isDown = false;
  carousel.classList.remove('active');
});

carousel.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - carousel.offsetLeft;
  const walk = (x - startX) * 2;
  carousel.scrollLeft = scrollLeft - walk;
});

// Touch events
carousel.addEventListener('touchstart', (e) => {
  startX = e.touches[0].pageX - carousel.offsetLeft;
  scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener('touchmove', (e) => {
  const x = e.touches[0].pageX - carousel.offsetLeft;
  const walk = (x - startX) * 2;
  carousel.scrollLeft = scrollLeft - walk;
});

// Contador de cursos
function updateCourseCounter() {
  const totalCourses = document.querySelectorAll('.carousel .course').length;
  const counterElement = document.getElementById('course-counter');
  const plural = totalCourses === 1 ? 'disponível' : 'disponíveis';
  counterElement.textContent = `${totalCourses} curso${totalCourses === 1 ? '' : 's'} ${plural}`;
}

window.addEventListener('DOMContentLoaded', updateCourseCounter);

function mostrarPerfil(event) {
  event.preventDefault();

  const secaoPerfil = document.getElementById('meu-perfil');

  // Alterna entre mostrar e esconder
  secaoPerfil.classList.toggle('show');

  // Se quiser esconder outras coisas (tipo o carrossel), descomenta isso:
  // document.querySelector('.carousel-container').style.display = secaoPerfil.classList.contains('show') ? 'none' : 'flex';
}
function mostrarPerfil(event) {
  event.preventDefault();
  document.getElementById('perfil-sidebar').classList.add('show');
}

function fecharPerfil() {
  document.getElementById('perfil-sidebar').classList.remove('show');
}


