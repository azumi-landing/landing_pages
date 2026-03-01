// Utilidades para acordeones

export function initAccordion(): void {
  const items = document.querySelectorAll('.accordion-item');
  
  items.forEach(item => {
    const summary = item.querySelector('.accordion-summary');
    const chevron = item.querySelector('.accordion-chevron');
    
    item.addEventListener('toggle', () => {
      if (chevron) {
        (chevron as HTMLElement).style.transform = 
          (item as HTMLDetailsElement).open ? 'rotate(180deg)' : 'rotate(0deg)';
      }
    });
  });
}
