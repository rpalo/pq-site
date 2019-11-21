// Clickable sections
const tiles = ["machining", "edm", "engineering", "molding"];
const BREAK = true;
tiles.some(function(tile) {
  const clickable = document.querySelector(`.tile__${tile}`);
  if (clickable) {
    clickable.addEventListener("click", function() {
      window.location = `/services/${tile}/`;
      return !BREAK;
    });
  } else {
    return BREAK;
  }
});

// Dropdown Services Menu

const servicesMenu = document.querySelector(".dropdown");
servicesMenu.addEventListener("click", function() {
  if (this.dataset["state"] == "open") {
    this.dataset["state"] = "closed";
  } else {
    this.dataset["state"] = "open";
  }
});
