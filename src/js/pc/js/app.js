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
    const access = document.querySelector('.access').offsetTop;
    const takeout = document.querySelector('.takeout').offsetTop;
    // ADDING CLASS TO THIS QUERY
    const con_burger = document.querySelector('.con_burger');
    const tk_burger = document.querySelector('.tk_burger');
    //change color background on SP
    const nav_m_wrap = document.querySelector('.nav_m_wrap');
    if(window.pageYOffset === hero){
        con_burger.classList.add('fade-left-in');
        con_burger.classList.remove('fade-left-out');
    }
    window.onscroll= () =>{
        const pageY = window.pageYOffset; 
        console.log(pageY);
        // if(pageY > 0){
        //     if(window.innerWidth <= 768 && window.innerWidth >= 320){
        //         nav_m_wrap.style.position ="fixed";
        //         nav_m_wrap.style.background ="rgba(0,0,0,.3)";
        //     }else{
        //         nav_m_wrap.style.position ="absolute";
        //         nav_m_wrap.style.background = "transparent";
        //     }
        // }
        if(pageY >= hero && pageY <= (concept-1) ){
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

        if(pageY >= (takeout - (menu/5)) && pageY <= (access + (access *.5))){
            if(window.innerWidth <=769){
                tk_burger.classList.add('fade-right-in02');
                tk_burger.classList.remove('fade-right-out02');
            }else{
                tk_burger.classList.remove('fade-right-out02');
                tk_burger.classList.remove('fade-right-in02');
            }
        }else{
            if(window.innerWidth <=769){
                tk_burger.classList.add('fade-right-out02');
                tk_burger.classList.remove('fade-right-in02');
            }else{
                tk_burger.classList.remove('fade-right-out02');
                tk_burger.classList.remove('fade-right-in02');
            }
        }
    }
});