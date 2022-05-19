function start() {
  var displayvar = 0;
  document.getElementById("var").innerHTML = displayvar;
}

function del() {
  var value = document.getElementById("var").innerHTML;
  value = value.slice(0, -1);
  document.getElementById("var").innerHTML = value;
  if (document.getElementById("var").innerHTML == "") {
    document.getElementById("var").innerHTML = 0;
  }
}

function zero() {
  var displayvar = 0;
  if (document.getElementById("var").innerHTML == 0) {
    document.getElementById("var").innerHTML = displayvar;
  } else document.getElementById("var").innerHTML += 0;
}

function one() {
  var displayvar = 1;
  if (document.getElementById("var").innerHTML == 0) {
    document.getElementById("var").innerHTML = displayvar;
  } else document.getElementById("var").innerHTML += 1;
}

function two() {
  var displayvar = 2;
  if (document.getElementById("var").innerHTML == 0) {
    document.getElementById("var").innerHTML = displayvar;
  } else document.getElementById("var").innerHTML += 2;
}

function three() {
  var displayvar = 3;
  if (document.getElementById("var").innerHTML == 0) {
    document.getElementById("var").innerHTML = displayvar;
  } else document.getElementById("var").innerHTML += 3;
}

function four() {
  var displayvar = 4;
  if (document.getElementById("var").innerHTML == 0) {
    document.getElementById("var").innerHTML = displayvar;
  } else document.getElementById("var").innerHTML += 4;
}

function five() {
  var displayvar = 5;
  if (document.getElementById("var").innerHTML == 0) {
    document.getElementById("var").innerHTML = displayvar;
  } else document.getElementById("var").innerHTML += 5;
}

function six() {
  var displayvar = 6;
  if (document.getElementById("var").innerHTML == 0) {
    document.getElementById("var").innerHTML = displayvar;
  } else document.getElementById("var").innerHTML += 6;
}

function seven() {
  var displayvar = 7;
  if (document.getElementById("var").innerHTML == 0) {
    document.getElementById("var").innerHTML = displayvar;
  } else document.getElementById("var").innerHTML += 7;
}

function eigth() {
  var displayvar = 8;
  if (document.getElementById("var").innerHTML == 0) {
    document.getElementById("var").innerHTML = displayvar;
  } else document.getElementById("var").innerHTML += 8;
}

function nine() {
  var displayvar = 9;
  if (document.getElementById("var").innerHTML == 0) {
    document.getElementById("var").innerHTML = displayvar;
  } else document.getElementById("var").innerHTML += 9;
}
