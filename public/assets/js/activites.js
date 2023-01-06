var timestamp = Date.now();
var checkTime = null;

document.addEventListener('DOMContentLoaded', function(){
    checkTime = setInterval(doTimeout, 5000);
});


document.addEventListener("click", function() {
    console.log("Hello")
    timestamp = Date.now();
});


function doTimeout(){
    if (Date.now() - timestamp >= 5000){
    
    console.log("change page");
  
  }

}