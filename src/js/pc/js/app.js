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
  
  document.addEventListener('DOMContentLoaded', () => {
      // OFFSET TOP OF EACH SECTIONS 
      const hero = document.querySelector('.hero').offsetTop;
      const concept = document.querySelector('.concept').offsetTop;
      const menu = document.querySelector('.menu').offsetTop;
      const quality = document.querySelector('.quality').offsetTop;
      const access = document.querySelector('.access').offsetTop;
      const takeout = document.querySelector('.takeout').offsetTop;
      // ADDING CLASS TO THIS QUERY
      const con_burger = document.querySelector('.con_burger');
      const tk_burger = document.querySelector('.tk_burger');
      // QUALITY SECTION
      //! PC 
      const buns_pc = document.querySelector('.buns_pc');
      const andmore_pc = document.querySelector('.andmore_pc');
      const omnibeef_pc = document.querySelector('.omnibeef_pc');
      const patty_pc = document.querySelector('.patty_pc');
      //! TABLET
      const buns_tab = document.querySelector('.buns_tab'); 
      const andmore_tab = document.querySelector('.andmore_tab');
      const omnibeef_tab = document.querySelector('.omnibeef_tab');
      const patty_tab = document.querySelector('.patty_tab');
      //! SP
      const buns_sp = document.querySelector('.buns_sp'); 
      const andmore_sp = document.querySelector('.andmore_sp');
      const omnibeef_sp = document.querySelector('.omnibeef_sp');
      const patty_sp = document.querySelector('.patty_sp');
  
      if(window.pageYOffset === hero){
          con_burger.classList.add('fade-left-in');
          con_burger.classList.remove('fade-left-out');
      }
      window.onscroll= () =>{
          const pageY = window.pageYOffset; 
          if(pageY >= (hero + 25) && pageY <= (concept-1) ){
              con_burger.classList.add('fade-left-in');
              con_burger.classList.remove('fade-left-out');
          }else{
              con_burger.classList.add('fade-left-out');
              con_burger.classList.remove('fade-left-in');
          }
          // PAGE AND MENU
          if(pageY >= menu && pageY <= (access + 500) ){
              if(window.innerWidth >= 770){
                  tk_burger.classList.add('fade-right-in');
                  tk_burger.classList.remove('fade-right-out');
              }else{
                  tk_burger.classList.remove('fade-right-out');
                  tk_burger.classList.remove('fade-right-in');
              }
  
  
          }else{
              if(window.innerWidth >= 770){
                  tk_burger.classList.add('fade-right-out');
                  tk_burger.classList.remove('fade-right-in');
              }else{
                  tk_burger.classList.remove('fade-right-out');
                  tk_burger.classList.remove('fade-right-in');
              }
          }
  
          if(pageY >= quality){
              if(window.innerWidth >= 770){
                  buns_pc.classList.add('zoome');
                  andmore_pc.classList.add('zoome');
                  omnibeef_pc.classList.add('zoome');
                  patty_pc.classList.add('zoome');
  
                  buns_tab.classList.add('zoome');
                  andmore_tab.classList.add('zoome');
                  omnibeef_tab.classList.add('zoome');
                  patty_tab.classList.add('zoome');
              }
              if(window.innerWidth <= 769){
                  buns_sp.classList.add('zoome');
                  andmore_sp.classList.add('zoome');
                  omnibeef_sp.classList.add('zoome');
                  patty_sp.classList.add('zoome');
              }
          }
      }
  });