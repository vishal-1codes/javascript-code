let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// Write your code below

let greenEnergy = obj => {
  obj['Fuel Type'] = 'avocado oil';
}

let remotelyDisable = obj => {
  obj.disabled = true;
}
// 1st method call
greenEnergy(spaceship);
//2nd method call
remotelyDisable(spaceship);
//object call
console.log(spaceship)
