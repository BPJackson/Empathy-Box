$(document).ready(function(){
$(".preview").click(function(){
  //This is our modal instead of alert
  $(function() {
    $("#emptyInput").dialog({
      autoOpen: false
    })
  });
      var userImg1 = $(".input1").val();
      var userImg2 = $(".input2").val();
      //If the input is good then output the images
      if (userImg1 && userImg2 !== ""){
        $(".output").replaceWith('<style>#imgLeft{ width: 90%; height: 90%; background-image: url(+'userImg1'+); background-size: cover; background-repeat: no-repeat; background-position: 50% 50%;}</style>'+
              '<div id="imgLeft"></div>'+
              '<style>#imgRight{ width: 90%; height: 90%; background-image: url(+'userImg2'+); background-size: cover; background-repeat: no-repeat; background-position: 50% 50%;}</style>'+
              '<div id="imgRight"></div>')
          //This keeps broken image icons from popping up
          $("img").error(function(){
            $(this).hide();
            $("#emptyInput").dialog('open')
          });
      }
      //If the input is shit, tell them to put a real URL in
      else {
              $("#emptyInput").dialog('open');
      }
  })
  $(".stereoscopify").click(function(){
    $(".twoImages").animate({ height: '100vh', width: '100vw' }, 2000 )
  })
})
