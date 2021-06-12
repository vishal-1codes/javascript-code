let availableAirplanes = [{
 name: 'AeroJet',
 maxSpeed:1200 ,
 minSpeed:300 ,
 fuelCapacity: 800,
 availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
}, 
{name: 'SkyJet',
 maxSpeed:800 ,
 minSpeed:200 ,
 fuelCapacity: 500,
 availableStaff: ['pilots', 'flightAttendants']
}];

let flightRequirements = {
  requiredSpeedRange: 700,
  requiredStaff: 4,
};

function meetsStaffRequirements(availableStaff, requiredStaff) {
  if (availableStaff.length >= requiredStaff) {
    return true;
  } else {
    return false;
  }
};

function meetsSpeedRangeRequirements(maxSpeed,minSpeed, requiredSpeedRange){
let range =maxSpeed - minSpeed; 
if ( range >requiredSpeedRange)
{ 
 return true;
}
else
{
 return false;
}
};
export let availableAirplanes = [...];
 
export let flightRequirements = {...};
 
export function meetsStaffRequirements(){
...
};
 
export function meetsSpeedRangeRequirements(){
...
};
