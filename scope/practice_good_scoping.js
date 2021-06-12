const logVisibleLightWaves = () => {
  let lightWaves = 'Moonlight';
	let region = 'The Arctic';
  // Add if statement here:
  if (region === 'The Arctic'){
    let lightWaves = 'Northern Lights';
    console.log(lightWaves); //northern lights
  }
  
  console.log(lightWaves); //moonlight
};

logVisibleLightWaves(); //reference error
