var buttoncolors = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userPattren = [];

var started = false;

var level = 0;
var S = 0;

$("body").keypress(function(){
  if(!started){
    $("h1").text("level "+level);
    started = true;
    nextSequenc();
    
  }
});

$("a").click(function(colorchosen){
  colorchosen = $(this).attr("id");
  Playsound(colorchosen);
  console.log(colorchosen);
});

$("button").click(function(colorchosen){
  
    colorchosen = $(this).attr("id");
    userPattren.push(colorchosen);
    
    checkanswer(userPattren.length-1);
    Playsound(colorchosen);
    animation(colorchosen);
    
  
});

function nextSequenc(){

  userPattren =[];
  level++;
  // start best Score ;=
  $("h1").text("level "+level);
  if(S == (level-1)){
  S++;
  $("p").text("Best Score : "+S);
 }
 // end
    
  
  



  var randomnumber = Math.floor(Math.random()*3);
  var randomchosencolour = buttoncolors[randomnumber];
  console.log(randomchosencolour);

  gamePattern.push(randomchosencolour);
  console.log(gamePattern);

setTimeout(function(){
  Playsound(randomchosencolour);
  animation(randomchosencolour);
},1000)
  

}

function animation(color){
  $("#"+color).addClass("pressed");
    setTimeout(function () {
      $("#"+color).removeClass("pressed");
    }, 200);
}

function Playsound(sounds) {
  var color = new Audio("sounds/" + sounds + ".mp3");
  color.play();
}

function checkanswer(currentlevel){
  if(gamePattern[currentlevel] == userPattren[currentlevel]){
    if(gamePattern.length === userPattren.length){
      setTimeout(function(){
        nextSequenc();
      },1000);
      Playsound("succes");
      $("body").addClass("succes");
    setTimeout(function () {
      $("body").removeClass("succes");
    }, 300);
    }
   console.log("succes");
   
  }else{

    $("h1").text("Game Over, Press Any Key to Restart");
    console.log("wrong"); 
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 300);
    Playsound("wrong");
    startover();
    
   
  }
 
}

function startover(){
    gamePattern = [];
    level = 0;
    started = false;
}



//best Score function





