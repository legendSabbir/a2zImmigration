

export function viewport(node, options) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        node.dispatchEvent(new CustomEvent('enterViewport'));
      } else {
        node.dispatchEvent(new CustomEvent('exitViewport'));
      }
    });
  }, options);

  io.observe(node);

  return {
    destroy() {
      io.disconnect();
    }
  };
}