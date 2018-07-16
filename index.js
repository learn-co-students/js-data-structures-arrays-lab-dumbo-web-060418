const drivers = ["Milo", "Otis", "Garfield"];


function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}


function destructivelyRemoveFirstDriver() {
  drivers.shift(0);
}

function destructivelyRemoveLastDriver() {
  drivers.pop()
}

function appendDriver(name) {
  const arr2 = [...drivers, name];
  return arr2;
}

function prependDriver(name) {
  const arr3 = [name, ...drivers];
  return arr3;
}

function removeLastDriver() {
  var temp = drivers;
  temp = temp.slice(0, temp.length - 1);
  return temp;
}

function removeFirstDriver() {
  var temp = drivers;
  temp = temp.slice(1);
  return temp;
}
