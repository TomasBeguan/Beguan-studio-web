
function copyToClipboard(element) {

  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();

  $("#popup_copy").css("visibility","visible");
  $("#popup_copy").css("opacity","1");

  setTimeout("showIt()", 1500); // after 5 sec

}

function showIt() {
  $("#popup_copy").css("opacity","0");
  $("#popup_copy").css("visibility","hidden");
  }

function navbar_on(){
  $(".menu_main_cont").css("left","0%");
}
function navbar_off(){
  $(".menu_main_cont").css("left","-100%");
}

$('.js-anchor-link').click(function(e){
  e.preventDefault();
  var target = $($(this).attr('href'));
  if(target.length){
    var scrollTo = target.offset().top;
    $('body, html').animate({scrollTop: scrollTo+'px'}, 800);
  }
});
