export function setupHoverAnimations() {
    document.querySelectorAll<HTMLImageElement>('img[data-animated-src]').forEach(img => {
      const staticSrc = img.src;
      const animatedSrc = img.dataset.animatedSrc!;
  
      img.addEventListener('pointerenter', () => {
        img.src = animatedSrc;
      });
  
      img.addEventListener('pointerleave', () => {
        img.src = staticSrc;
      });
    });
}