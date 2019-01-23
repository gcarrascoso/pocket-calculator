
let string = "";
let storage = "";
let operatorFunction = 0;
var output = 0
var cleanFunction = false;
var decimalFunction = false;

function clean() {
  var p = document.getElementById("output");
  p.innerHTML = 0;
  string = "";
  storage = "";
  operatorFunction = 0;
  cleanFunction = true;
  output = 0;
  if (operatorFunction == true) {
    decimalFunction = false;
    document.getElementById("decimalPlace").disabled = false;
  }
}

function equals() {
  var p = document.getElementById("output");
  string = eval(string);
  p.innerHTML = Number(string).toLocaleString();
  if (Number(string) > 999999999 || Number(string) < 0.000000001 && Number(string) != 0 && Number(string) > 0) {
    p.innerHTML = Number(string).toExponential()
  }
  output = 1;
}

function addSign() {
  var p = document.getElementById("output");
  storage = string;
  storage += "+";
  p.innerHTML = storage;
  output = 0;
  operatorFunction = 1;
  if (operatorFunction == 1) {
    document.getElementById("decimalPlace").disabled = false;
  }
}

function minusSign() {
  var p = document.getElementById("output");
  storage = string;
  storage += "-"
  p.innerHTML = storage;
  output = 0;
  operatorFunction = 1;
  if (operatorFunction == 1) {
    document.getElementById("decimalPlace").disabled = false;
  }
}

function multiplySign() {
  var p = document.getElementById("output");
  storage = string;
  storage += "*"
  p.innerHTML = storage;
  output = 0;
  operatorFunction = 1;
  if (operatorFunction == 1) {
    document.getElementById("decimalPlace").disabled = false;
  }
}

function divideSign() {
  var p = document.getElementById("output");
  storage = string;
  storage += "/"
  p.innerHTML = storage;
  output = 0;
  operatorFunction = 1;
  if (operatorFunction == 1) {
    document.getElementById("decimalPlace").disabled = false;
  }
}

function decimalPlace() {
  if (decimalFunction == false){
    var p = document.getElementById("output");
    storage = string;
    storage += ".";
    p.innerHTML = storage;
    decimalFunction = true;
  }
  if (decimalPlace == true) {
    document.getElementById("deciButton").disabled = true;
  }
}

function opposite() {
  var p = document.getElementById("output");
  string = Number(string) * (-1);
  p.innerHTML = string;
  output = 0;
}

function percent() {
  var p = document.getElementById("output");
  storage = string;
  storage += "%";
  string = Number(string) * (0.01)
  p.innerHTML = storage;
  output = 0;
}

function numberZero() {
  if (output == 1) {
    output = "0";
  } else if (operatorFunction == 1) {
      operatorFunction = 0;
      string = storage;
    } else if (decimalFunction == 1) {
      decimalFunction = 0;
      string = storage;
    }
  string += "0";
  var p = document.getElementById("output");
  p.innerHTML = string;
  if (string.length > 12) {
       alert("OVERFLOW ERROR");
       clean();
    }
}

function numberOne() {
  if (output == 1) {
    output = "1";
  } else if (operatorFunction == 1) {
      operatorFunction = 0;
      string = storage;
    } else if (decimalFunction == 1) {
      decimalFunction = 0;
      string = storage;
    }
  string += "1";
  var p = document.getElementById("output");
  p.innerHTML = string;
  if (string.length > 12) {
       alert("OVERFLOW ERROR");
       clean();
     }
}

function numberTwo() {
  if (output == 1) {
    output = "2";
  } else if (operatorFunction == 1) {
      operatorFunction = 0;
      string = storage;
    } else if (decimalFunction == 1) {
      decimalFunction = 0;
      string = storage;
    }
  string += "2";
  var p = document.getElementById("output");
  p.innerHTML = string;
  if (string.length > 12) {
       alert("OVERFLOW ERROR");
       clean();
     }
}

function numberThree() {
  if (output == 1) {
    output = "3";
  } else if (operatorFunction == 1) {
      operatorFunction = 0;
      string = storage;
    } else if (decimalFunction == 1) {
      decimalFunction = 0;
      string = storage;
    }
  string += "3";
  var p = document.getElementById("output");
  p.innerHTML = string;if (string.length > 12) {
       alert("OVERFLOW ERROR");
       clean();
     }
}

function numberFour() {
  if (output == 1) {
    output = "4";
  } else if (operatorFunction == 1) {
      operatorFunction = 0;
      string = storage;
    } else if (decimalFunction == 1) {
      decimalFunction = 0;
      string = storage;
    }
  string += "4";
  var p = document.getElementById("output");
  p.innerHTML = string;
  if (string.length > 12) {
       alert("OVERFLOW ERROR");
       clean();
     }
}

function numberFive() {
  if (output == 1) {
    output = "5";
  } else if (operatorFunction == 1) {
      operatorFunction = 0;
      string = storage;
    } else if (decimalFunction == 1) {
      decimalFunction = 0;
      string = storage;
    }
  string += "5";
  var p = document.getElementById("output");
  p.innerHTML = string;
  if (string.length > 12) {
       alert("OVERFLOW ERROR");
       clean();
     }
}

function numberSix() {
  if (output == 1) {
    output = "6";
  } else if (operatorFunction == 1) {
      operatorFunction = 0;
      string = storage;
    } else if (decimalFunction == 1) {
      decimalFunction = 0;
      string = storage;
    }
  string += "6";
  var p = document.getElementById("output");
  p.innerHTML = string;
  if (string.length > 12) {
       alert("OVERFLOW ERROR");
       clean();
     }
}

function numberSeven() {
  if (output == 1) {
    output = "7";
  } else if (operatorFunction == 1) {
      operatorFunction = 0;
      string = storage;
    } else if (decimalFunction == 1) {
      decimalFunction = 0;
      string = storage;
    }
  string += "7";
  var p = document.getElementById("output");
  p.innerHTML = string;
  if (string.length > 12) {
       alert("OVERFLOW ERROR");
       clean();
     }
}

function numberEight() {
  if (output == 1) {
    output = "8";
  } else if (operatorFunction == 1) {
      operatorFunction = 0;
      string = storage;
    } else if (decimalFunction == 1) {
      decimalFunction = 0;
      string = storage;
    }
  string += "8";
  var p = document.getElementById("output");
  p.innerHTML = string;
  if (string.length > 12) {
       alert("OVERFLOW ERROR");
       clean();
     }
}

function numberNine() {
  if (output == 1) {
    output = "9";
  } else if (operatorFunction == 1) {
      operatorFunction = 0;
      string = storage;
    } else if (decimalFunction == 1) {
      decimalFunction = 0;
    }
  string += "9";
  var p = document.getElementById("output");
  p.innerHTML = string;
  if (string.length > 12) {
       alert("OVERFLOW ERROR");
       clean();
     }
}
