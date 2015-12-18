$(document).ready(function(){
  $("#rightCircle").animate({"left": "-=1.5vw"}, 800);
  $("#leftCircle").animate({"left": "+=1.5vw"}, 800);

  $(".letsGo").click(function(){
    window.location.href="../index.html"
  })
})
// $("#leftCircle").mouseenter(function(){
//   $("#rightCircle").hide(300);
// })
$("#rightCircle, #leftCircle").mouseleave(function(){
  $("#rightCircle").animate({"left": "-=13.5vw", height: '28vw', width: '28vw' }, 1200);
  $("#leftCircle").animate({"left": "+=13.5vw", height: '30vw', width: '30vw' }, 1000);
  // $("#leftCircle").animate({ height: '30vw', width: '30vw' }, 600 )
  $("#leftCircle").removeAttr("id");
  $("#rightCircle").removeAttr("id");
})
  // $(".circleLeft").css('cursor', 'url(../cursor.png), auto');
// $("#rightCircle, #leftCircle").mouseleave(function(){
//   $("#leftCircle").animate({ height: '30vw', width: '30vw' }, 600 )
//   $("#leftCircle").removeAttr("id");
//   $("#rightCircle").removeAttr("id");
// })
