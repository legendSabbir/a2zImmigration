const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      el.dispatchEvent(new CustomEvent('enterViewport'));
      el.dataset.visible = true;
      io.unobserve(el);
    }
  })
});

export function viewport(node) {
  io.observe(node);

  return {
    destroy() {
      io.unobserve(node);
    }
  };
}