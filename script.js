gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});








// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

var tl = gsap.timeline()

tl.from("#nav img",{
    y:-30,
    stagger:0.2
},"anime")
tl.from("#nav ul li",{
    y:-30,
    stagger:0.2
},"anime")
var tl2 = gsap.timeline()
tl2.from("#page1-inner h1 ",{
    opacity:0,
    y:-20,
    duration:1,
    
})
tl2.from("#page1-inner h2 ",{
    opacity:0,
    y:-20,
    duration:1,
    
})
var tl3 = gsap.timeline({
  scrollTrigger:{
    trigger:"#page2-first",
    scroller:"#main",
    markers:false,
    start:"top 50%",
    end:"top 70%",
    scrub:3
}
})
tl3.from("#page2-first h1",{
 
  y:-20,
    duration:1,
    delay:1,
    opacity:1,
    
})
tl3.from("#page2-first p",{
 
  y:-20,
    duration:1,
    delay:1,
    opacity:1,
    
})
var tl4 = gsap.timeline({
  scrollTrigger:{
    trigger: "#page2-second",
    scroller: "#main",
    markers: false,
    start: "top 50%",
    end: "top 90%",
    scrub: 3,
    toggleActions: "play reverse play reverse"
  }
});

tl4.from("#page2-second h1", {
  y: -20,
  duration: 1,
  delay: 1,
  opacity: 1
});

tl4.from("#page2-second .skills-container", {
  y: -20,
  duration: 1,
  delay: 1,
  opacity: 1
});

var tl4 = gsap.timeline({
  scrollTrigger:{
    trigger: "#page3",
    scroller: "#main",
    markers: false,
    start: "top 50%",
    end: "top 90%",
    scrub: 3,
    toggleActions: "play reverse play reverse"
  }
});

tl4.from("#page3 h1", {
  y: -20,
  duration: 1,
  delay: 1,
  opacity: 1
});

tl4.from("#page3 .card-container", {
  y: -20,
  duration: 1,
  delay: 1,
  opacity: 1
});
// Wait for the DOM to load


// Initialize Locomotive Scroll
const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});

// Adding event listeners to navigation items
document.querySelectorAll('#nav-right li').forEach(navItem => {
  navItem.addEventListener('click', (event) => {
      const targetId = event.currentTarget.getAttribute('data-target');
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
          scroll.scrollTo(targetElement);
      }
  });
});

gsap.from("#nav-left img", {
  opacity: 0,
  duration: 1,
  y: -50
});

gsap.from("#nav-right ul li", {
  opacity: 0,
  duration: 1,
  delay: 1,
  stagger: 0.2,
  y: -50
});

gsap.from("#page1-inner", {
  opacity: 0,
  duration: 1,
  delay: 1.2,
  y: 100
});