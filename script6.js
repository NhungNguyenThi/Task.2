$(document).ready(function(){

  var height = 0;
  var i = 0;  
  var j = 1;  
  var k = 0;  
  
  var B = 5;
  var S = 25;
  var time1 = S*60;
  var time2 = B*60;
  var elem = document.getElementById("bar");
  $("#B_sub").click(function(){
    if(B>1){
      B--;
      time2 = B*60;
    }
    $("#B_time").html(B);
    $("#time").html(S+":00");
    k=1;
    clean();
  });
  $("#B_add").click(function(){
    if(B<30){
      B++;
      time2 = B*60;
    }
    $("#B_time").html(B);
    $("#time").html(S+":00");
    k=1;
    clean();
  });
  $("#S_sub").click(function(){
    if(S>1){
      S--;
      time1 = S*60;
    }
    $("#S_time").html(S);
    $("#time").html(S+":00");
    k=1;
    clean();
  });
  $("#S_add").click(function(){
    if(S<60){
      S++;
      time1 = S*60;
    }
    $("#S_time").html(S);
    $("#time").html(S+":00");
    k=1;
    clean();
  });
  
  function clean(){
    i=0;
    height = 0;
    elem.style.height = 0;
  }

  function move(p1, p2) {
    k = 0;
    var increment = 100 / 60 / p1;

    var id = setInterval(frame, 1000);

    function frame() {
      if(k){
        clearInterval(id);
        return 1;
      }else if (i % 2 == 1) {
        if (height >= 100) {
          clearInterval(id);
          time1 = S*60;
          moveDown(p1, p2);
        } else {
          time1--;
          height += increment;
          elem.style.height = height + '%';
          if(time1>=0){
            $("#time").html(Math.floor(time1/60)+":"+time1%60);
          }
          
            
        } 
      } else {
        clearInterval(id);
        return 1;
      }
    } 
  } 

  function moveDown(p1, p2) {
    j=0;
    k=0;

    var increment = 100 / 60 / p2;
    var elem = document.getElementById("bar");
   

    var id = setInterval(frame, 1000);

    function frame() {
      if(k){
        clearInterval(id);
        return 1;
      }else if (i % 2 == 1) {
        if (height < 0) {
          j=1; 
          clearInterval(id);
          time2=B*60;
          move(p1, p2);
        } else {
          time2--;
          height -= increment;
          elem.style.height = height + '%';
          if(time2>=0){
            $("#time").html(Math.floor(time2/60)+":"+time2%60);
          }
          
        }
      } else {
        clearInterval(id);
        return 1;
      }
    }
  }

  
  
  $(".display").click(function() {
    i++;
    k=0;
    if(j){
      move(S, B);
    }else{
      moveDown(S,B);
    }
  });

});