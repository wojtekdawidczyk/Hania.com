

var imagesList = ["duck", "chick", "cow", "dog", "elephant", "goat",
 "horse", "sheep", "bee", "cat", "frog", "pig"];


$(".animal").click(function(){
  var className = this.name;
  $("." + className).addClass("animal-active");
  setTimeout(function(){ $("." + className).removeClass("animal-active") }, 1000);
  var audio = new Audio("sounds/" + className + ".mp3");
  audio.play();
});


$(".all-animals").click(function() {
  for (var j = 0; j < imagesList.length; j++) {
    var audioAllAnimals = new Audio("sounds/" + imagesList[j] + ".mp3");
    audioAllAnimals.play();
  }
  $(".all-animals").addClass("animal-active");
  setTimeout(function(){ $(".all-animals").removeClass("animal-active") }, 1000);
});
