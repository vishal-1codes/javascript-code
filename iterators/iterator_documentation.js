const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below
//we use length
console.log(words.some(word => {
  return word.length < 6;
}));

// Use filter to create a new array
const interestingWords = words.filter( word=>{
  return word.length>5;
}); 
console.log(interestingWords);
//we use every() method
console.log(interestingWords.every(word=>word.length>5));
