var colorList = ["red", "black", "blue", "green", "orange", "pink", "yellow"];

for (var l = 0; l < colorList.length; l++) {
  document.querySelector("." + colorList[l]).addEventListener("click", function() {
    var audioColor = new Audio("sounds/" + this.name + "Wojtas.m4a");
    audioColor.play();
  });
}
