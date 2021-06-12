const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star'; //old value

const callMyNightSky = () => {
  stars = 'Sirius';     // new Value
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());
console.log(stars);
