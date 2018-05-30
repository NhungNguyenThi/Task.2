  

  var countTime = 25;
	var breakTime = 5;
	var pause = false;//work
	var seconds = 0;
	var minutes = 25;
	var counting;

document.getElementById("timer").innerHTML = minutes+ ":00";
document.getElementById("count").value = countTime;
document.getElementById("break").value = breakTime;
function countDown(){
  var x = document.getElementById("title").textContent;
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


function minusBreak(){
  if(pause == false){
    if(breakTime > 1){
      breakTime--;
      document.getElementById("break").innerHTML=breakTime
      document.getElementById("title").innerHTML="Session";
      document.getElementById("timer").innerHTML = minutes+ ":00";
      seconds = 0;
      minutes = countTime;
    }
  }
}

function plusBreak() {
  if(pause == false){
    if(breakTime < 10){
    breakTime++;
    document.getElementById("break").innerHTML=breakTime;
    document.getElementById("title").innerHTML="Session";
    document.getElementById("timer").innerHTML = minutes+ ":00";
    seconds = 0;
    minutes = countTime;
    }
  }
}


function minusCount() {
  if(pause == false){
    if(countTime > 1){
      countTime--;
        document.getElementById("count").innerHTML = countTime;
        document.getElementById("timer").innerHTML = countTime + ":00";
        document.getElementById("title").innerHTML="Session";
    }
    seconds = 0;
    minutes = countTime;
  }
}

function plusCount() {
  if(pause == false){
    if(countTime < 60){
      countTime++;
        document.getElementById("count").innerHTML = countTime;
        document.getElementById("timer").innerHTML = countTime + ":00";
        document.getElementById("title").innerHTML="Session";
        seconds = 0;
        minutes = countTime;
    }
  }
}  

