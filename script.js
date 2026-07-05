// Prevent mobile browsers from auto-scaling the fixed sidebar layout on rotate.
(function () {
  function fix() {
    var meta = document.querySelector("meta[name=viewport]");
    if (!meta) return;
    meta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
  }

  window.addEventListener("orientationchange", fix, false);
})();
