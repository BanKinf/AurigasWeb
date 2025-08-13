export function setupHoverAnimations(): void {
  document.querySelectorAll<HTMLElement>('[data-mob-card]').forEach(card => {
    const staticImg = card.querySelector<HTMLImageElement>('img')!;
    const animatedUrl = staticImg.dataset.animatedSrc!;
    const container = staticImg.parentElement!;

    if (getComputedStyle(container).position === 'static') {
      container.style.position = 'relative';
    }

    let animatedImg: HTMLImageElement | null = null;
    let isHovering = false;

    card.addEventListener('mouseenter', () => {
      isHovering = true;

      if (!animatedImg) {
        animatedImg = document.createElement('img');
        animatedImg.src = animatedUrl;
        animatedImg.alt = '';
        animatedImg.loading = 'eager';
        Object.assign(animatedImg.style, {
          position: 'absolute',
          top: '0',
          left: '50%',
          transform: 'translateX(-50%)',
          height: '100%',
          width: 'auto',
          objectFit: 'contain',
          opacity: '0',
          transition: 'opacity 0.2s ease-in-out',
          pointerEvents: 'none',
        });

        container.appendChild(animatedImg);

        animatedImg.onload = () => {
          if (isHovering) {
            staticImg.style.opacity = '0';
            animatedImg!.style.opacity = '1';
          } else {
            animatedImg!.style.opacity = '0';
            staticImg.style.opacity = '1';
          }
        };

        animatedImg.onerror = () => {
          if (animatedImg && animatedImg.parentElement) {
            animatedImg.parentElement.removeChild(animatedImg);
            animatedImg = null;
          }
        };
      } else {
        staticImg.style.opacity = '0';
        animatedImg.style.opacity = '1';
      }
    });

    card.addEventListener('mouseleave', () => {
      isHovering = false;
      staticImg.style.opacity = '1';
      if (animatedImg) animatedImg.style.opacity = '0';
    });
  });
}