var a = document.querySelectorAll("nav a");
var tl = gsap.timeline();

tl.from("nav img", {
  y: -100,
});

a.forEach((elam) => {
  tl.from(elam, {
    y: -100,
    ease: "power2.out",
  });
});

tl.from(".section1", {
  x: -100,
  opacity: 0,
});
tl.from(".section2", {
  scale:0,
});
