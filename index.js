 // Get the second navbar element by its ID
 var secondNavbar = document.getElementById("second-navbar");

 // Add a mouseover event listener to change the background color on hover
 secondNavbar.addEventListener("mouseover", function() {
   secondNavbar.style.backgroundColor = "darkcyan";
 });

 // Add a mouseout event listener to change the background color back to its original state
 secondNavbar.addEventListener("mouseout", function() {
   secondNavbar.style.backgroundColor = ""; // Set it back to the default (transparent) color
 });