const drivers = ["Milo", "Otis", "Garfield"];

const destructivelyAppendDriver = (name) => drivers.push(name);


const destructivelyPrependDriver = (name) => drivers.unshift(name);


const destructivelyRemoveLastDriver = () => drivers.pop();


const destructivelyRemoveFirstDriver = () => drivers.shift();


const appendDriver = (name) => [...drivers, name];


const prependDriver = (name) => [name, ...drivers];


const removeFirstDriver = () => drivers.slice(1);


const removeLastDriver = () => drivers.slice(0, drivers.length - 1);
