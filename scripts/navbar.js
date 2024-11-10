function shrinkNavbar() {
    var currentNavbar = document.getElementById("myNavbar");
    
    if (currentNavbar.className === "navbar") {
        currentNavbar.className += " responsive";
    } else {
        currentNavbar.className = "navbar";
    }
}