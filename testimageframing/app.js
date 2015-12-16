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
//(These functions must be declared OUTSIDE of the document.ready jQuery func)
//This shows us the left eye image when the user uploads it
function previewLeftFile() {
  var previewLeft = document.querySelector('.previewLeft');
  var file    = document.querySelector('input[class="leftUpload"]').files[0];
  var reader  = new FileReader();
  reader.onloadend = function () {
    previewLeft.src = reader.result;
  }
  if (file) {
    reader.readAsDataURL(file);
  }
}
//This shows us the right eye image when the user uploads it
function previewRightFile() {
  var previewRight = document.querySelector('.previewRight');
  var file    = document.querySelector('input[class="rightUpload"]').files[0];
  var reader2  = new FileReader();
  reader2.onloadend = function () {
    previewRight.src = reader2.result;
  }
  if (file) {
    reader2.readAsDataURL(file);
  }
}

$(".uploadPreview").click(function(){
  //Here the left uploaded image will be previewed and displayed
  var previewLeft = document.querySelector('.previewLeft');
  var file    = document.querySelector('input[class="leftUpload"]').files[0];
  var reader  = new FileReader();
  //This is where the magic happens with the uploaded images
  reader.onload = function(e) {
    $(".viewPort").append('<style>.image1{background-image: url("'+e.target.result+'");}</style>')
    //This animates our images to small preview mode
    $(".viewPort").animate({ height: '10vh', width: '10vw' }, 1000 )
  }
  if (file) {
    reader.readAsDataURL(file);
  }
  //Here the right uploaded image will be previewed and displayed
  var previewRight = document.querySelector('.previewRight');
  var file    = document.querySelector('input[class="rightUpload"]').files[0];
  var reader2  = new FileReader();
  //This is where the magic happens with the uploaded images
  reader2.onload = function(e) {
    $(".viewPort").append('<style>.image2{background-image: url("'+e.target.result+'");}</style>')
    //This animates our images to small preview mode
    $(".viewPort").animate({ height: '10vh', width: '10vw' }, 1000 )
  }
  if (file) {
    reader2.readAsDataURL(file);
  }
})
//Heres the upload stereoscopify button
$(".uploadStereoscopifyButton").click(function(){
  $(".viewPort").animate({ height: '100vh', width: '100vw' }, 1000 )
})















// function getOrientation(file, callback) {
//     var reader = new FileReader();
//     reader.onload = function(e) {
//
//         var view = new DataView(e.target.result);
//         if (view.getUint16(0, false) != 0xFFD8) return callback(-2);
//         var length = view.byteLength;
//         var offset = 2;
//         while (offset < length) {
//             var marker = view.getUint16(offset, false);
//             offset += 2;
//             if (marker == 0xFFE1) {
//                 var little = view.getUint16(offset += 8, false) == 0x4949;
//                 offset += view.getUint32(offset + 4, little);
//                 var tags = view.getUint16(offset, little);
//                 offset += 2;
//                 for (var i = 0; i < tags; i++)
//                     if (view.getUint16(offset + (i * 12), little) == 0x0112)
//                         return callback(view.getUint16(offset + (i * 12) + 8, little));
//             }
//             else if ((marker & 0xFF00) != 0xFF00) break;
//             else offset += view.getUint16(offset, false);
//         }
//         return callback(-1);
//     };
//     reader.readAsArrayBuffer(file.slice(0, 64 * 1024));
// }
// //This function gets us the EXIF number of the orientation of the img
// getOrientation(document.querySelector('input[class="leftUpload"]').files[0], function(orientation) {
// console.log(orientation);
// });
