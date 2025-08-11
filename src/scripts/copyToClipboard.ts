export function copyToClipboard(button: HTMLButtonElement) {
  const textToCopy = button.dataset.textToCopy;
  if (!textToCopy) return;

  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      const originalHTML = button.innerHTML;
      button.innerHTML =
        '<svg class="h-3 w-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>';
      setTimeout(() => {
        button.innerHTML = originalHTML;
      }, 1000);
    })
    .catch((err) => {
      console.error("Error copying to clipboard:", err);
    });
}
