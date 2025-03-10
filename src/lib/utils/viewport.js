const io = typeof IntersectionObserver === 'undefined' ? null : new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      el.dispatchEvent(new CustomEvent('enterViewport'));
      el.dataset.visible = true;
      io.unobserve(el);
    }
  })
}, {
  rootMargin: '0px 0px 100px 0px'
});

export function viewport(node) {
  io.observe(node);

  return {
    destroy() {
      io.unobserve(node);
    }
  };
}