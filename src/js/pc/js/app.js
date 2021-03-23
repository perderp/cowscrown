$(document).ready(function(){
  $(window).on("scroll",function(){
      var wn = $(window).scrollTop();
      if(wn > 120){
          $(".navbar").css("background","rgba(0,0,0,0.3)");
      }
      else{
          $(".navbar").css("background","rgba(1,1,1,0)");
      }
  });
});