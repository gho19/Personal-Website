/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function fadeInPage() {

    if (!window.AnimationEvent) { return; }

    var fader = document.getElementById('fader');
    fader.classList.add('fade-out');
}
