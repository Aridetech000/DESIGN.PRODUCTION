



var bigbox = document.querySelector("#page5");
var box = document.querySelector("#page5-box");
bigbox.addEventListener("mousemove", (date) => {
  var xal = gsap.utils.mapRange(0, window.innerWidth, 50+box.getBoundingClientRect().width/2, window.innerWidth - (50+box.getBoundingClientRect().width/2), date.clientX)
  // var val = gsap.utils.mapRange(0, window.innerHeight, 50+box.getBoundingClientRect().height/2, window.innerHeight - (50+box.getBoundingClientRect().height/2), date.clientY)
  gsap.to("#page5-box", {
    left: xal,
    // top: val,
    rotate:360,
    ease: Power3,
  })
})

function point() {
  var point = document.querySelector("#point");

  window.addEventListener("mousemove", (dets) => {
    point.style.left = dets.x + "px";
    point.style.top = dets.y + "px";
  })
}

point();

function locomotive() {
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
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });

  /*
  // --- RED PANEL ---
  gsap.from(".line-1", {
    scrollTrigger: {
      trigger: ".line-1",
      scroller: ".smooth-scroll",
      scrub: true,
      start: "top bottom",
      end: "top top",
      onUpdate: self => console.log(self.direction)
    },
    scaleX: 0,
    transformOrigin: "left center", 
    ease: "none"
  });
  
  
  // --- ORANGE PANEL ---
  gsap.from(".line-2", {
    scrollTrigger: {
      trigger: ".orange",
      scroller: ".smooth-scroll",
      scrub: true,
      pin: true,
      start: "top top",
      end: "+=100%"
    },
    scaleX: 0, 
    transformOrigin: "left center", 
    ease: "none"
  });
  
  
  // --- PURPLE/GREEN PANEL ---
  var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".purple",
        scroller: ".smooth-scroll",
        scrub: true,
        pin: true,
        start: "top top",
        end: "+=100%"
      }
    });
  
  tl.from(".purple p", {scale: 0.3, rotation:45, autoAlpha: 0, ease: "power2"})
    .from(".line-3", {scaleX: 0, transformOrigin: "left center", ease: "none"}, 0)
    .to(".purple", {backgroundColor: "#28a92b"}, 0);
  
  
  */


  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

}

locomotive();

var hea = gsap.timeline();

hea.to(".page-heding-inner>h1", {
  y: "0",
  duration: 1.4,
})
hea.to(".page-heding-inner2>h1", {
  y: "0",
  duration: 1.4,
})

var tl = gsap.timeline({
  stagger: 1,
});


tl.to(".page2-inner .page2-box h1", {
  x: "0%",
  duration: 0.5,
  ease: "ease",
  // stagger:0.2,
  scrollTrigger: {
    trigger: ".page2-box h1",
    scroller: "#main",
    start: "top 60%",
    end: "top 30%",
    // delay:0.5,
    // pin:true,
    // markers:true, 
    scrub: 2,
  }
})

tl.to(".page2-img img", {
  transform: "translateX(-50%)",
  transform: "translateY(-200%)",
  duration: 10,
  stagger: 3,
  // ease:"ease",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "#main",
    start: "top 0%",
    end: "top -80%",
    delay: 10,
    // markers:true,
    scrub: true,
    pin: true,
  }
})

tl.from("#page2 .page2-inner-circil", {
  // y:"20%",
  scale: 0,
  duration: 10,
  opacity: 1,
  delay: 20,
  scrollTrigger: {
    trigger: "#page2 .page2-inner-circil",
    scroller: "#main",
    start: "top 0%",
    end: "top -80%",
    // markers:true,
    scrub: true,
    // pin:true,

  }
})

tl.from("#page2 #img", {
  x: "200%",
  duration: 2,
  scale: 1,
  scrollTrigger: {
    trigger: "#img",
    scroller: "#main",
    start: "top -50%",
    end: "top -70%",
    scrub: 1,
    // markers:true,
    // pin:true,
  }
})

tl.to("#page3 h1", {
  x: "-30%",
  duration: 2,
  delay: 2,
  scrollTrigger: {
    trigger: "#page3",
    scroller: "#main",
    start: "top 40%",
    end: "top -20%",
    scrub: 3,
    // markers:true,
    // pin:true,
  }
})
tl.to("#page3 #ho", {
  x: "30%",
  duration: 0.6,
  // delay:2,
  scrollTrigger: {
    trigger: "#page3",
    scroller: "#main",
    start: "top 40%",
    end: "top -20%",
    scrub: 3,
    // markers:true,
    // pin:true,
  }
})

const tv = gsap.timeline();
tv.from(".page4-inner-left h1", {
  y: "-80%",
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".page4-inner-left h1",
    scroller: "#main",
    start: "top 45%",
    end: "top 15%",
    // markers:true,

    scrub: 3,
  }
})
tv.from(".page4-inner-left p", {
  y: "80%",
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".page4-inner-left p",
    scroller: "#main",
    start: "top 75%",
    end: "top 35%",
    // markers:true,

    scrub: 2,
  }
})

gsap.from(".page4-img img", {
  scale: 0,
  duration: 1,
  // delay:3,
  scrollTrigger: {
    trigger: ".page4-img img",
    scroller: "#main",
    start: "top 60%",
    end: "top 20%",
    // markers:true,

  }
})



// const text = document.querySelector(".text h1");
// text.innerHTML = text.innerText.split("").map((char, i) =>
// `<span style="transform:rotate(${i * 6.7}deg)">${char}</span>`).join("")

// const texto = document.querySelector(".text2 .round");
// texto.innerHTML = texto.innerText.split("").map((char, i) =>
// `<span style="transform:rotate(${i * 6.6}deg)">${char}</span>`).join("")



// gsap.to(".text",{
//   rotate:360,
//   duration:2.5,
//   // delay:4,
//   scrollTrigger:{
//     trigger:".text",
//     scroller:"#main",
//     start:"top 70%",
//     end:"top 0%",
//     markers:true,
//     // ease:"circ",
//     scrub:0.5,
//   }


// })

// gsap.to(".text2",{
//   rotate:-360,
//   duration:2.5,
//   // delay:4,
//   scrollTrigger:{
//     trigger:".text2",
//     scroller:"#main",
//     start:"top 70%",
//     end:"top 0%",
//     markers:true,
//     // ease:"circ",
//     scrub:0.5,
//   }


// })