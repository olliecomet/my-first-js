// reference needed elements 
const result = document.getElementById('result');
const nameInput = document.getElementById('name');

// action to take on user event 
function updateResult() {
  result.textContent = nameInput.value;
}

// add message to console while var x is greater than 20
const x = 120;

if(x > 20){
  console.log('hello console viewer. this is from when I first began learning JavaScript :>', x);
}
