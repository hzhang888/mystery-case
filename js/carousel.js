(function () {
  const track = document.querySelector('.carousel-track');
  if (!track) return;

  const slides = track.querySelectorAll('.carousel-slide');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  const dotsContainer = document.querySelector('.carousel-dots');

  let current = 0;
  let autoplayTimer;

  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.classList.add('carousel-dot');
    if (i === 0) dot.classList.add('active');
    dot.setAttribute('aria-label', `第 ${i + 1} 张`);
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll('.carousel-dot');

  function goTo(index) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
    resetAutoplay();
  }

  function resetAutoplay() {
    clearInterval(autoplayTimer);
    autoplayTimer = setInterval(() => goTo(current + 1), 4000);
  }

  prevBtn.addEventListener('click', () => goTo(current - 1));
  nextBtn.addEventListener('click', () => goTo(current + 1));

  resetAutoplay();
})();
