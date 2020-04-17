
var sectionsList = ["animals", "colors"];

for (var i = 0; i < sectionsList.length; i++) {
  document.querySelector("." + sectionsList[i]).addEventListener("click", function() {
    location.href = this.name + ".html";

  } );
}
