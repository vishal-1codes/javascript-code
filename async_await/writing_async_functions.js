const shopForBeans = require('./library.js');
//we add async
async function getBeans() {
  let value = myPromise();
  console.log(`1. Heading to the store to buy beans...`);
  //we add await 
  let value = await shopForBeans();
  console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
}
getBeans();

