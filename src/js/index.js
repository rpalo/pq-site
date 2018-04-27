// Clickable sections
const tiles = ["machining", "edm", "engineering", "molding"];
const BREAK = true;
tiles.some(function(tile) {
  const clickable = document.querySelector(`.tile__${tile}`);
  if (clickable) {
    clickable.addEventListener("click", function() {
      window.location = "services/";
      return !BREAK;
    });
  } else {
    return BREAK;
  }
});
