// Enable KaTeX auto-render after each page load (Material SPA)
(function () {
  function render() {
    if (window.renderMathInElement) {
      window.renderMathInElement(document.body, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false }
        ],
        throwOnError: false
      });
    }
  }
  if (window.document$) {
    window.document$.subscribe(render);
  } else {
    document.addEventListener('DOMContentLoaded', render);
  }
})();
