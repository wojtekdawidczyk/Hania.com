
$(".animal").click(function(){
  var className = this.name;
  $("." + className).addClass("animal-active");
  setTimeout(function(){ $("." + className).removeClass("animal-active") }, 1000);
  var audio = new Audio("sounds/domestic-birds/" + className + ".m4a");
  audio.play();
});
