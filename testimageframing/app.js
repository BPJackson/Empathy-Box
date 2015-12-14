$(document).ready(function(){
  //This is our modal instead of alert
  $(function() {
    $("#emptyInputAlert").dialog({
      autoOpen: false
    })
  });
  //This keeps broken image icons from popping up
$("img").error(function(){
    $(this).hide();
    $("#emptyInput").dialog('open')
  });
  //===================================
  //This is our preview button
  $(".previewButton").click(function(){
    if($(".leftEye").val() && $(".rightEye").val() !== ""){
      //When the user clicks 'preview', they see their images
      $(".viewPort").append('<style>.image1{background-image: url("'+$(".leftEye").val()+'");}</style>'+'<style>.image2{background-image: url("'+$(".rightEye").val()+'");}</style>')
      //This animates our images to small preview mode
      $(".viewPort").animate({ height: '10vh', width: '10vw' }, 1000 )
    }
    //If there is a bad URL or no input, we show our modal
    else {
      $("#emptyInputAlert").dialog('open');
    }
})
    //This is our stereoscopify button
    $(".stereoscopicButton").on("click", function(){
      if($(".leftEye").val() && $(".rightEye").val() !== ""){
        
        $(".viewPort").animate({ height: '100vh', width: '100vw' }, 1000 )
      }
      else {
        $("#emptyInputAlert").dialog('open');
      }
  })
})
