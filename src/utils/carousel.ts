// Utilidades para carousels/sliders

interface CarouselConfig {
  container: HTMLElement;
  prevBtn?: HTMLElement;
  nextBtn?: HTMLElement;
  dotsContainer?: HTMLElement;
  cardsPerView?: number;
}

export function initCarousel(config: CarouselConfig): void {
  const { container, prevBtn, nextBtn, dotsContainer, cardsPerView = 2 } = config;
  const cards = Array.from(container.querySelectorAll('.card'));
  
  const getStep = () => {
    const card = cards[0];
    if (!card) return 320;
    const cardWidth = card.getBoundingClientRect().width;
    const gap = 16;
    return cardWidth + gap;
  };

  // Crear dots
  if (dotsContainer && cards.length) {
    const slides = Math.max(1, Math.ceil(cards.length / cardsPerView));
    for (let i = 0; i < slides; i++) {
      const dot = document.createElement('button');
      dot.className = 'dot btn btn-xs btn-circle';
      dot.setAttribute('aria-label', `Ir al grupo ${i + 1}`);
      dot.addEventListener('click', () => {
        const step = getStep();
        container.scrollTo({ left: i * step * cardsPerView, behavior: 'smooth' });
      });
      dotsContainer.appendChild(dot);
    }
  }

  const setActiveDot = () => {
    if (!dotsContainer || !cards.length) return;
    const scrollLeft = container?.scrollLeft || 0;
    const step = getStep();
    const index = Math.round(scrollLeft / (step * cardsPerView));
    dotsContainer.querySelectorAll('.dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  };

  // Navegación
  prevBtn?.addEventListener('click', () => {
    const step = getStep();
    container.scrollBy({ left: -step, behavior: 'smooth' });
  });

  nextBtn?.addEventListener('click', () => {
    const step = getStep();
    container.scrollBy({ left: step, behavior: 'smooth' });
  });

  // Actualizar dots en scroll
  container?.addEventListener('scroll', () => {
    window.clearTimeout((container as any)._dotTimeout);
    (container as any)._dotTimeout = window.setTimeout(setActiveDot, 80);
  });

  setActiveDot();
}
