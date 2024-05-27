var typed = new Typed(".text", {
    strings: ["Full-Stack Developer", "Web Developer", "App Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });
  
var New = document.querySelector('.New');
var nav = document.querySelector('.nav');
var links = document.querySelectorAll('.nav li');

New.addEventListener("click", function() {
    this.classList.add("click");
    nav.classList.add("open");
});

function page1Animation(){
  var tl=gsap.timeline()

tl.from(".nav li, nav, .logo",{
  y:-30,
  opacity:0,
  delay:0.4,
  duration:0.5,
  stagger:0.14
})}
function page2Animation(){
  var tl2 = gsap.timeline({
      scrollTrigger:{
          trigger:".about",
          scroller:"body",
          start:"top 50%",
          end:"top -60%",
          srcub:2,
      }
  })
  
  tl2.from(".services",{
      y:30,
      opacity:0,
      duration:0.5,
  })
  tl2.from(".elem.line1.left",{
      x:-300,
      opacity:0,
      duration:0.5,
  })
  tl2.from(".elem.line1.right",{
      x:300,
      opacity:0,
      duration:0.5,
  })
  tl2.from(".elem.line2.left",{
      x:-300,
      opacity:0,
      duration:0.5,
  })
  tl2.from(".elem.line2.right",{
      x:300,
      opacity:0,
      duration:0.5,
  })
}

page1Animation();
