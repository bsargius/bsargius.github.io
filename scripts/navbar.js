function shrinkNavbar() {
    var currentNavbar = document.getElementById("myNavbar");
    
    if (currentNavbar.className === "navbar") {
        currentNavbar.className += " responsive";
    } else {
        currentNavbar.className = "navbar";
    }
}

function hamburgerIconTransition(x) {
    x.classList.toggle("change");
  }