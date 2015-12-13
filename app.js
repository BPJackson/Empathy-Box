$(document).ready(function(){
$(".preview").click(function(){
  //This is our modal instead of alert
  $(function() {
    $("#emptyInput").dialog({
      autoOpen: false
    })
  });
      //If the input is good then output the images
      if ($(".input1").val() && $(".input2").val() !== ""){
        $(".output").replaceWith('<div id="imgLeft"><img src="' + $(".input1").val() + '"></div>' + '<div id="imgRight"><img src="' + $(".input2").val() + '"></div>')
          //This keeps broken image icons from popping up
          $("img").error(function(){
            $(this).hide();
            $("#emptyInput").dialog('open')
          });
          //Janky attempt at styling this fucking dynamic shit
          // $("#imgLeft").css({
          //   'width': '90%';
          //   'height': '90%';
          //   'background-size': 'cover';
          //   'background-repeat': 'no-repeat';
          //   'background-position': '50%' '50%';
          // })
          // $("#imgRight").css({
          //   'width': '90%';
          //   'height': '90%';
          //   'background-size': 'cover';
          //   'background-repeat': 'no-repeat';
          //   'background-position': '50%' '50%';
          // })
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
