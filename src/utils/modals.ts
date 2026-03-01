// Utilidades para manejo de modales

export function openModal(id: string): void {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

export function closeModal(id: string): void {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

export function initModal(): void {
  // Cerrar al hacer click en overlay
  document.querySelectorAll('[data-modal]').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restaurar scroll
      }
    });
  });

  // Cerrar con botón
  document.querySelectorAll('[data-close]').forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('[data-modal]');
      if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restaurar scroll
      }
    });
  });

  // Cerrar con ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('[data-modal].active').forEach(modal => {
        modal.classList.remove('active');
      });
      document.body.style.overflow = ''; // Restaurar scroll
    }
  });
}

// Exponer globalmente para onclick inline
declare global {
  interface Window {
    openModal: (id: string) => void;
    closeModal: (id: string) => void;
  }
}

if (typeof window !== 'undefined') {
  window.openModal = openModal;
  window.closeModal = closeModal;
}
