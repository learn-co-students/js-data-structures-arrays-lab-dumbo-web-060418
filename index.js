// Write your solution here!
const drivers = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendDriver(driver) {
  drivers.push(driver);
}

function destructivelyPrependDriver(driver) {
  drivers.unshift(driver);
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver () {
  drivers.shift();
}

function appendDriver(name) {
  const allDrivers = [...drivers, name];
  return allDrivers;
}

function prependDriver(name) {
  const allDrivers = [name, ...drivers];
  return allDrivers;
}

function removeLastDriver() {
  const lessDrivers = drivers.slice(0, drivers.length - 1);
  return lessDrivers;
}

function removeFirstDriver() {
  const lessDrivers = drivers.slice(1);
  return lessDrivers;
}
