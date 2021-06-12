const xhr = new XMLHttpRequest(); //new obj
const url = 'https://api-to-call.com/endpoint'; //set url
xhr.responseType = 'json'; //response type
xhr.onreadystatechange = () => { 
  if (xhr.readyState === XMLHttpRequest.DONE){
    return xhr.response;
  }
}
xhr.open('GET', url); //open request
xhr.send();
