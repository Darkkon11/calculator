var displayvar = 0;
setTimeout(100);

function changeValue() {
  document.getElementById("var").innerHTML = displayvar;
}

function setCurrentValue(elem) {
  if ((displayvar == 0) | ".") {
    displayvar = elem.innerHTML;
  } else {
    displayvar += elem.innerHTML;
  }
  changeValue();
  return displayvar;
}

function setDot(elem) {
  var lastValue = displayvar.slice(-1);
  if (lastValue != ".") {
    displayvar += elem.innerHTML;
  } // nur ein Dot in ganz Displayvar drin hinzufügen
  changeValue();
  return displayvar;
}

function deleteLastNumber() {
  displayvar = displayvar.slice(0, -1);
  if (displayvar == "") {
    displayvar = 0;
  }
  changeValue();
  return displayvar;
}

function cleanAll() {
  displayvar = 0;
  changeValue();
  return displayvar;
}
