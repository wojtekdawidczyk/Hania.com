
// var colorList = ["black", "blue", "brown" ]

$("button").click(function(){
  var className = this.name;
  var audioColor = new Audio("sounds/" + className + "Wojtas.m4a");
  audioColor.play();
  $("." + className).addClass( className + "-active");
  setTimeout(function(){ $("." + className).removeClass( className + "-active") }, 1000);
});

// $(".red").click(function() {
//   $(".red").addClass("red-active");
//   setTimeout(function(){ $(".red").removeClass("red-active") }, 1000);
// });
