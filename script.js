function loadingAnimtion(){
    var t1 = gsap.timeline()
  t1.from(".line h1",{
      y: 100,
      stagger: 0.25,
      duration: 0.6,
      delay: 0.3
  })
  
  t1.from("#waiting",{
      opacity: 0
  })
  
  t1.from("#line1-part1",{
      opacity: 0,
      onStart: function(){
          var h5timer = document.querySelector("#line1-part1 h5")
          var grow = 0
  
  setInterval(function(){
      if(grow<100){
          h5timer.innerHTML = grow++
          
      }
      else{
          h5timer.innerHTML = grow
      }
  },34);
      },
  });
  
  t1.to(".line h2",{
      animationName: "anime",
      opacity: 1
  })
  
  t1.to("#loader",{
      opacity: 0,
      duration: 0.3,
      delay: 4
  })

  t1.from("#page1",{
    delay: 0.17,
    y: -100,
    opacity: 0,
    duration: 0.4,
    ease: Power4

})

t1.from("#nav-right",{
    opacity: 0,
    y: -100,
    duration: 0.5,
    delay: 0.4
})

t1.from("#nav-left h3",{
  opacity: 0,
  y: -100,
  duration: 0.5,
  delay: 0.5,
  stagger: 0.8
})

t1.from("#header_content",{
    x: -120,
    opacity: 0,
    duration: 0.8,
    delay: 0.5,
    stagger: 1,
})
  
  t1.to("#loader",{
      display: "none"
  })
  }
  
  loadingAnimtion()


function cursorAnimation(){
    document.addEventListener("mousemove", function(dets){
        gsap.to("#cursor",{
            left: dets.x,
            top: dets.y,
            // duration: 0.3,
            // ease: "elastic.out"
        })
    })

    // Shery.mouseFollower({
    //     skew: true,
    //     ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    //     duration: 1,
    //   });

    Shery.makeMagnet("#nav-left h3");
}

cursorAnimation()


      var t2 = gsap.timeline()

      t2.from(".content", {
            opacity: 0,
            y: 50, // Move 50px down
            duration: 1,
            stagger: 1,
            delay: 1, // Animation duration
            scrollTrigger: {
                trigger: "#page2", // Trigger element
                start: "top 60%", // Animation starts when the top of trigger element reaches 80% of the viewport
                end: "top 30%", // Animation ends when the top of trigger element reaches 30% of the viewport
                toggleActions: "play none none none", // Animation will play when it enters the viewport and will not reverse
                // markers: true, // Add markers for debugging
                scrub: 2 // Smoothly animates based on scroll position
            }
        });


        t2.from(".aboutus",{
            opacity: 0,
            y: 50,
            duration: 1,
            delay: 1,
            scrollTrigger: {
                trigger: ".aboutus",
                start: "top 40%",
                end: "top 0%",
                scrub: 1
            }
        })

        t2.from(".card, #card_btn",{
            opacity: 0,
            y: 50, // Move 50px down
            duration: 0.5,
            stagger: 1,
            delay: 1, // Animation duration
            scrollTrigger: {
                trigger: "#page3", // Trigger element
                start: "top 30%", // Animation starts when the top of trigger element reaches 80% of the viewport
                end: "top 0%", // Animation ends when the top of trigger element reaches 30% of the viewport
                toggleActions: "play none none none", // Animation will play when it enters the viewport and will not reverse
                scrub: 4 // Smoothly animates based on scroll position
            }
        })

        t2.from("#page4",{
            opacity: 0,
            duration: 0.8,
            delay: 1,
            scrollTrigger: {
                trigger: "#page4",
                scroller: "body",
                scrub: 1,
                /* markers: true, */
                start: "top 40%",
                end: "top 0%"
            }
        })

        t2.from("#page5",{
            opacity: 0,
            duration: 0.8,
            delay: 1,
            scrollTrigger: {
                trigger: "#page5",
                scroller: "body",
                scrub: true,
             /*    markers: true, */
                start: "top 40%",
                end: "top 0%"
            }
        })

        t2.from("#page6",{
            opacity: 0,
            duration: 0.8,
            delay: 1.2,
            scrollTrigger: {
                trigger: "#page6",
                scroller: "body",
                scrub: 1,
                // markers: true,
                start: "top -10%",
                end: "top -10%"
            }
        })

        t2.from("#footer",{
            opacity: 0,
            duration: 0.8,
            delay: 1.2,
            scrollTrigger: {
                trigger: "#footer",
                scroller: "body",
                scrub: 5,
             /*    markers: true, */
                start: "top -10%",
                end: "top -10%"
            }
        })

        function marqueAnimation(){
            window.addEventListener("wheel",function(dets){
                if(dets.deltaY > 0){
        
                   gsap.to(".marque",{
                    transform:"translateX(-200%)",
                    repeat:-1,
                    duration:4,
                    ease:"none"
                   })
        
                   gsap.to(".marque img",{
                          rotate:180       
                   })
                } else{
                    gsap.to(".marque",{
                        transform:"translateX(0%)",
                        repeat:-1,
                        duration:4,
                        ease:"none"
                       })
        
                       gsap.to(".marque img",{
                        rotate:0
                       })
                }
        })
        }
        
        marqueAnimation()
        




// var t1 = gsap.timeline()
// t1.from("#nav #nav-right",{
//     opacity: 0,
//     y: -100,
//     duration: 0.6,
//     delay: 0.5
// })

// t1.from("#nav #nav-left h3",{
//     opacity: 0,
//     y: -100,
//     stagger: 1,
//     duration: 0.5,
// })


// t1.from("#header_content",{
//     opacity: 0,
//     x: -120,
//     duration: 0.5,
// })





const slides = document.querySelectorAll(".slide")
const radioButton = document.querySelectorAll(".button")

var counter = 0;

slides.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`
    }
)

const goNext = () => {
    counter++
    slideImage()
}

const goPrev = () => {
    counter--
    slideImage()
}

const slideImage = () => {
    slides.forEach(
        (slide) => {
            counter <= slides.length - 1 ?
            slide.style.transform = `translateX(-${counter * 100}%)` 
            : counter = slides.length - 1
        }
    )

    radioButton.forEach((radio, i) => {
        radio.checked = i===counter
    })
}

const changeSlide = (slideNumber) => {
    counter = slideNumber
    slides.forEach(
        (slide) => {
            counter <= slides.length -1 ?
            slide.style.transform = `translateX(-${counter * 100}%)` 
            : counter = slides.length -1
        }
    )
}
