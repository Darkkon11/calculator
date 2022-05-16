function start() {
  var displayvar = 0;
  document.getElementById("var").innerHTML = displayvar;
}

function seven() {
  var displayvar = 7;
  if (document.getElementById("var").innerHTML == 0) {
    document.getElementById("var").innerHTML = displayvar;
  } else document.getElementById("var").innerHTML += 7;
}
