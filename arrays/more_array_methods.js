const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();//0 index remove

console.log(groceryList);

groceryList.unshift('popcorn');//0 index add

console.log(groceryList);

console.log(groceryList.slice(1, 4));//list of item print

console.log(groceryList);

const pastaIndex = groceryList.indexOf('pasta');

console.log(pastaIndex);
