
$("a").click(function(sound){
    sound = $(this).attr("id");
    Playsound(sound);
    console.log(sound);
  });

  function Playsound(sounds) {
    var color = new Audio("sounds/" + sounds + ".mp3");
    color.play();
  }