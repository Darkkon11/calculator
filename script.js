var displayvar = 0;
setTimeout(100);

function changeValue() {
  document.getElementById("var").innerHTML = displayvar;
}

function setCurrentValue(elem) {
  if (displayvar == 0) {
    displayvar = elem.innerHTML;
  } else {
    displayvar += elem.innerHTML;
  }
  changeValue();
  return displayvar;
}

function setSymbol(elem) {
  var lastValue = displayvar.slice(-1);
  if (lastValue != elem.innerHTML) {
    displayvar += elem.innerHTML;
  }
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

function calculate() {}

function cleanAll() {
  displayvar = 0;
  changeValue();
  return displayvar;
}
