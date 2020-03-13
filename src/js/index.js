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

const dropdownMenus = document.querySelectorAll(".dropdown");
dropdownMenus.forEach(function(menu) {
  menu.addEventListener("click", function() {
    if (this.dataset["state"] == "open") {
      this.dataset["state"] = "closed";
    } else {
      this.dataset["state"] = "open";
    }
  });
});
