// for smoooth scroll

function loco(){
     
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

}  
loco()

// word flow

var clutter ="";

document.querySelector("#page2>h1").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`

    document.querySelector("#page2>h1").innerHTML = clutter;
})


gsap.to("#page2>h1>span",{
    scrollTrigger:{
        trigger:`#page2>h1>span`,
        start:`top bottom`,
        end:`bottom top`,
        scroller:`#main`,
        scrub:.5,
    },
    stagger:.2,
    color:`#fff`
})



function canvas(){
  const canvas = document.querySelector("#page3>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
render();
});

function files(index) {
var data = `
./project/frames00007.png
./project/frames00010.png
./project/frames00013.png
./project/frames00016.png
./project/frames00019.png
./project/frames00022.png
./project/frames00025.png
./project/frames00028.png
./project/frames00031.png
./project/frames00034.png
./project/frames00037.png
./project/frames00040.png
./project/frames00043.png
./project/frames00046.png
./project/frames00049.png
./project/frames00052.png
./project/frames00055.png
./project/frames00058.png
./project/frames00061.png
./project/frames00064.png
./project/frames00067.png
./project/frames00070.png
./project/frames00073.png
./project/frames00076.png
./project/frames00079.png
./project/frames00082.png
./project/frames00085.png
./project/frames00088.png
./project/frames00091.png
./project/frames00094.png
./project/frames00097.png
./project/frames00100.png
./project/frames00103.png
./project/frames00106.png
./project/frames00109.png
./project/frames00112.png
./project/frames00115.png
./project/frames00118.png
./project/frames00121.png
./project/frames00124.png
./project/frames00127.png
./project/frames00130.png
./project/frames00133.png
./project/frames00136.png
./project/frames00139.png
./project/frames00142.png
./project/frames00145.png
./project/frames00148.png
./project/frames00151.png
./project/frames00154.png
./project/frames00157.png
./project/frames00160.png
./project/frames00163.png
./project/frames00166.png
./project/frames00169.png
./project/frames00172.png
./project/frames00175.png
./project/frames00178.png
./project/frames00181.png
./project/frames00184.png
./project/frames00187.png
./project/frames00190.png
./project/frames00193.png
./project/frames00196.png
./project/frames00199.png
./project/frames00202.png
`;
return data.split("\n")[index];
}

const frameCount = 67;

const images = [];
const imageSeq = {
frame: 1,
};

for (let i = 0; i < frameCount; i++) {
const img = new Image();
img.src = files(i);
images.push(img);
}

gsap.to(imageSeq, {
frame: frameCount - 1,
snap: "frame",
ease: `none`,
scrollTrigger: {
  scrub: .5,
  trigger: `#page3`,
  start: `top top`,
  end: `250% top`,
  scroller: `#main`,
},
onUpdate: render,
});

images[1].onload = render;

function render() {
scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
var canvas = ctx.canvas;
var hRatio = canvas.width / img.width;
var vRatio = canvas.height / img.height;
var ratio = Math.max(hRatio, vRatio);
var centerShift_x = (canvas.width - img.width * ratio) / 2;
var centerShift_y = (canvas.height - img.height * ratio) / 2;
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.drawImage(
  img,
  0,
  0,
  img.width,
  img.height,
  centerShift_x,
  centerShift_y,
  img.width * ratio,
  img.height * ratio
);
}
ScrollTrigger.create({

trigger: "#page3",
pin: true,
scroller: `#main`,
start: `top top`,
end: `250% top`,
});
}
canvas()


// scroll 2

// word flow

var clutter2 ="";

document.querySelector("#page4>h1").textContent.split("").forEach(function(dets){
    clutter2 += `<span>${dets}</span>`

    document.querySelector("#page4>h1").innerHTML = clutter2;
})


gsap.to("#page4>h1>span",{
    scrollTrigger:{
        trigger:`#page4>h1>span`,
        start:`top bottom`,
        end:`bottom top`,
        scroller:`#main`,
        scrub:.5,
    },
    stagger:.2,
    color:`#fff`
})

function canvas2(){
  const canvas = document.querySelector("#page5>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
render();
});

function files(index) {
var data = `
./project/bridges00004.png
./project/bridges00007.png
./project/bridges00010.png
./project/bridges00013.png
./project/bridges00016.png
./project/bridges00019.png
./project/bridges00022.png
./project/bridges00025.png
./project/bridges00028.png
./project/bridges00031.png
./project/bridges00034.png
./project/bridges00037.png
./project/bridges00040.png
./project/bridges00043.png
./project/bridges00046.png
./project/bridges00049.png
./project/bridges00052.png
./project/bridges00055.png
./project/bridges00058.png
./project/bridges00061.png
./project/bridges00064.png
./project/bridges00067.png
./project/bridges00070.png
./project/bridges00073.png
./project/bridges00076.png
./project/bridges00079.png
./project/bridges00082.png
./project/bridges00085.png
./project/bridges00088.png
./project/bridges00091.png
./project/bridges00094.png
./project/bridges00097.png
./project/bridges00100.png
./project/bridges00103.png
./project/bridges00106.png
./project/bridges00109.png
./project/bridges00112.png
./project/bridges00115.png
./project/bridges00118.png
./project/bridges00121.png
./project/bridges00124.png
./project/bridges00127.png
./project/bridges00130.png
./project/bridges00133.png
./project/bridges00136.png
./project/bridges00139.png
./project/bridges00142.png
./project/bridges00145.png
./project/bridges00148.png
./project/bridges00151.png
./project/bridges00154.png
./project/bridges00157.png
./project/bridges00160.png
./project/bridges00163.png

`;
return data.split("\n")[index];
}

const frameCount = 54;

const images = [];
const imageSeq = {
frame: 1,
};

for (let i = 0; i < frameCount; i++) {
const img = new Image();
img.src = files(i);
images.push(img);
}

gsap.to(imageSeq, {
frame: frameCount - 1,
snap: "frame",
ease: `none`,
scrollTrigger: {
  scrub: .5,
  trigger: `#page5`,
  start: `top top`,
  end: `250% top`,
  scroller: `#main`,
},
onUpdate: render,
});

images[1].onload = render;

function render() {
scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
var canvas = ctx.canvas;
var hRatio = canvas.width / img.width;
var vRatio = canvas.height / img.height;
var ratio = Math.max(hRatio, vRatio);
var centerShift_x = (canvas.width - img.width * ratio) / 2;
var centerShift_y = (canvas.height - img.height * ratio) / 2;
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.drawImage(
  img,
  0,
  0,
  img.width,
  img.height,
  centerShift_x,
  centerShift_y,
  img.width * ratio,
  img.height * ratio
);
}
ScrollTrigger.create({

trigger: "#page5",
pin: true,
scroller: `#main`,
start: `top top`,
end: `250% top`,
});
}
canvas2()


// smooth scroll page 6

var clutter3 ="";

document.querySelector("#page6>h1").textContent.split("").forEach(function(dets){
    clutter3 += `<span>${dets}</span>`

    document.querySelector("#page6>h1").innerHTML = clutter3;
})


gsap.to("#page6>h1>span",{
    scrollTrigger:{
        trigger:`#page6>h1>span`,
        start:`top bottom`,
        end:`bottom top`,
        scroller:`#main`,
        scrub:.5,
    },
    stagger:.2,
    color:`#fff`
});


//click
// alert("hi");
       console.log("helooo");

// let learn=document.querySelector("#book");
// learn.addEventListener("click",()=>{
//        alert("hello");
//        console.log("helooo");
// });nc

function book(){
    alert("hello-boy");
}
