export function setupHoverAnimations(): void {
    document.querySelectorAll<HTMLElement>('[data-mob-card]').forEach(card => {
      const staticImg   = card.querySelector<HTMLImageElement>('img')!;
      const animatedUrl = staticImg.dataset.animatedSrc!;
      const container   = staticImg.parentElement!;
  
      let animatedImg: HTMLImageElement | null = null;
  
      card.addEventListener('mouseenter', () => {
        if (!animatedImg) {
          animatedImg = document.createElement('img');
          animatedImg.src     = animatedUrl;
          animatedImg.alt     = '';
          animatedImg.loading = 'lazy';
          Object.assign(animatedImg.style, {
            position:   'absolute',
            top:        '0',
            left:       '50%',
            transform:  'translateX(-50%)',
            height:     '100%',
            width:      'auto',
            objectFit:  'contain',
            opacity:    '0',
            transition: 'opacity 0.2s ease-in-out',
            pointerEvents: 'none',
          });
          container.appendChild(animatedImg);
  
          animatedImg.onload = () => {
            staticImg.style.opacity    = '0';
            animatedImg!.style.opacity = '1';
          };
        }
        else {
          staticImg.style.opacity    = '0';
          animatedImg.style.opacity  = '1';
        }
      });
  
      card.addEventListener('mouseleave', () => {
        staticImg.style.opacity = '1';
        if (animatedImg) animatedImg.style.opacity = '0';
      });
    });
}