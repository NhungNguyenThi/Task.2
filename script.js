  var countTime = 25;
	var breakTime = 5;
	var pause = false;
	var seconds = 0;
	var minutes = 25;
	var counting;

document.getElementById("timer").innerHTML = minutes+ ":00";
var x = document.getElementById("title").textContent;
function countDown(){
  if(minutes == 0 && seconds == 0){
    if(x == "Session"){
      document.getElementById("title").innerHTML="Break";
      minutes = breakTime;
      document.getElementById("timer").innerHTML=minutes + ":0" + seconds;
    }
    else if(x == "Break"){
      document.getElementById("title").innerHTML="Session";
      minutes = countTime;
      document.getElementById("timer").innerHTML=minutes + ":0" + seconds;
    }
  }
    else{
      if(seconds == 0){seconds = 60; minutes--;}
      seconds--;
      if(seconds < 10){
        document.getElementById("timer").innerHTML=minutes + ":0" + seconds;
      }
      else{
        document.getElementById("timer").innerHTML=minutes + ":" + seconds;
      }
    }
}
document.getElementById("startbtn").addEventListener("click", function(){
  if(pause == false){
     counting = setInterval(countDown, 1000);
     pause = true;
   }
}); 
document.getElementById("pausebtn").addEventListener("click", function(){
  if(pause == true){
     clearInterval(counting);
     pause = false;
   }
}); 
