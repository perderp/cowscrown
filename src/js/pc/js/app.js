const human = document.querySelector('.human__01');
const humanShadow = document.querySelector('.human__02');

const space = document.querySelector('.space__01');
const spaceShadow = document.querySelector('.space__02');

const house01 = document.querySelector('.house__01');
const house02 = document.querySelector('.house__02');

window.addEventListener('mousemove', (evt) => {
  const x = (window.innerWidth / 2 - evt.pageX) / 20;
  const y = (window.innerHeight / 2 - evt.pageY) / 20;
  const x1 = (window.innerWidth / 2 - evt.pageX) / 60;
  const y1 = (window.innerHeight / 2 - evt.pageY) / 60;
  const x2 = (window.innerWidth / 2 - evt.pageX) / 90;
  const y2 = (window.innerHeight / 2 - evt.pageY) / 90;

  human.style.transform = `translateY(${y}px) translateX(${x}px)`;
  humanShadow.style.transform = `translateY(${y}px) translateX(${x}px)`;

  space.style.transform = `translateY(${y}px) translateX(${x}px)`;
  spaceShadow.style.transform = `translateY(${y}px) translateX(${x}px)`;

  house01.style.transform = `translateY(${y2}px) translateX(${x2}px)`;
  house02.style.transform = `translateY(${y2}px) translateX(${x2}px)`;
  // .style.transform = `translateY(${y}px) translateX(${x}px)`;


  
  // console.log("THIS IS X :" + evt.pageX + " THIS IS Y:"+evt.pageY);
  // console.log(`WINDOW WIDTH ${window.innerWidth/2} PAGEY ${evt.pageX}`)

  // console.log(` ${-(window.innerWidth/2 - evt.pageX) }`)
});


const hello = document.querySelector('.blog__search > h1');
hello.animate(
  [{transform:'translateX(0px)'},
  {transform:'translateX(30px)'},
  {transform:'translateX(0px)'}]
  
,{duration: 1000, iterations: Infinity });
