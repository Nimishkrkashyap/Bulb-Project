var bulbOn = document.querySelector('#bulbon');
var bulbOff = document.querySelector('#bulboff');
var center = document.querySelector('#center');

var lightOn = false;

center.addEventListener('click', function(){
   if (lightOn == false) {
    bulbOff.style.display = "none";
    bulbOn.style.display = "initial"; 
    lightOn = true;                
   } else {
    bulbOn.style.display = "none";
    bulbOff.style.display = "initial";
    lightOn = false; 
   }
})
