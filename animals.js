

var imagesList = ["duck", "chick", "cow", "dog", "elephant", "goat",
 "horse", "sheep", "bee", "cat", "frog", "pig"];


for (var i = 0; i < imagesList.length; i++) {
  document.querySelector("." + imagesList[i]).addEventListener("click", function() {
    var audio = new Audio("sounds/" + this.name + ".mp3");
    audio.play();
  });
}

document.querySelector(".all-animals").addEventListener("click", function() {

  for (var j = 0; j < imagesList.length; j++) {
    var audioAllAnimals = new Audio("sounds/" + imagesList[j] + ".mp3");
    audioAllAnimals.play();
  }
});
