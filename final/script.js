var icon = document.getElementById("toggleButton");
icon.onclick = function(){
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
        icon.src = "assets/img/lightsunmoon.png";
    } else {
        icon.src = "assets/img/sunmoon.png";
    }
}

var toggleButton = document.getElementById('toggleButton');
var htmlElement = document.documentElement;

toggleButton.addEventListener('click', function() {
    htmlElement.classList.toggle('dark-mode');
});


var toggleButton = document.getElementById('toggleButton');
var isDarkMode = false; 
var cloudImgs = document.querySelectorAll('.cloud-img');

toggleButton.addEventListener('click', function() {
  isDarkMode = !isDarkMode; 


  cloudImgs.forEach(function(cloudImg) {
    if (isDarkMode) {
      cloudImg.src = 'assets/img/star.png';
    } else {
      cloudImg.src = 'assets/img/cloud.png';
    }
  });
});



