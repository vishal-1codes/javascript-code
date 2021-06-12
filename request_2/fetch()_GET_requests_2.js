fetch('https://api-to-call.com/endpoint').then(response => {  //1st then start here
if(response.ok)          //if else start 
{
  return response.json();
}
throw new Error('Request failed!');
},networkError => console.log(networkError.message))
.then( jsonResponse => {   // 2nd then start here
return jsonResponse;     //return respones
});
