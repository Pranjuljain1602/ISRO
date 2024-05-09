function loadingAnimation() {
    var preloader = document.querySelector(".preloader");

    // GSAP Animation
    var tl = gsap.timeline();

    // Add GSAP animations
    tl.from(".rocket", { y: "-100vh", ease: "bounce.out", duration: 1 }, "-=0.5")
      .from(".cloud1, .cloud2, .cloud3", { y: "-100vh", duration: 1, stagger: 0.5 }, "-=0.5")
      .to(".preloader", { opacity: 0, y: "-90vh",duration: 1, delay: 1, onComplete: showWebsiteContent });

    // Function to show website content after preloader animation completes
    function showWebsiteContent() {
        preloader.classList.add("end-preloader");
        document.querySelector('#main').style.opacity = 1;
    }

    // Additional animations
    tl.from("#page1", {
        delay: 0.17,
        opacity: 0,
        duration: 0.4,
        ease: "power4.out"
    });

    tl.from("#nav-right", {
        opacity: 0,
        y: -80,
        duration: 0.45
    });

    tl.from("#nav-left h3", {
        opacity: 0,
        y: -80,
        duration: 0.45,
        stagger: 0.2
    });

    tl.from("#header_content", {
        x: -100,
        opacity: 0,
        duration: 0.4,
    }, "pjain");

    var h2 = document.querySelector("#header_content h2");
    var h2Text = h2.textContent;
    var clutter = "";
    var splittedText = h2Text.split("");

    splittedText.forEach(function(elem){
        clutter += `<span style="font-family: 'Roboto Condensed';">${elem}</span>`;
    });

    h2.innerHTML = clutter;

    tl.from("h2 span", {
        x: -70,
        opacity: 0,
        duration: 0.3,
        stagger: 0.04,
        ease: "power4.out"
    }, "pjain");
}

loadingAnimation();

function cursorAnimation() {
    Shery.mouseFollower({
        skew: true,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
      });

    Shery.makeMagnet("#nav-left h3");

}

cursorAnimation();



      var t2 = gsap.timeline()

      t2.from(".content", {
            opacity: 0,
            y: 50, // Move 50px down
            duration: 1,
            stagger: 1,
            delay: 1.2, // Animation duration
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
            duration: 0.7,
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



// GSAP timeline for the footer animation
var footerAnimation = gsap.timeline({
    scrollTrigger: {
      trigger: "#footer-top", // Trigger when the footer comes into view
    //   markers: true,
      start: "top 80%", // Start animation when footer is 80% into view
      end: "top 20%", // End animation when footer is 70% into view
      scrub: 3 // Smooth scrubbing effect
    }
  });
  
  // Define animations for different elements in the footer
  footerAnimation
    // Animation for #footer-top elements
    .from("#footer-top img, #footer-top h1", {
      opacity: 0,
      y: -20,
      stagger: 0.2
    }, '+=0.5')
    // Animation for #footer-content elements
    .from("#footer-content p, #footer-content ul", {
      opacity: 0,
      y: -20,
      stagger: 0.2
    })
    // Animation for #footer-bottom elements
    .from("#footer-bottom h4", {
      opacity: 0,
      y: -20
    });
  
  // Add span elements to the h1 element in the footer
  var footerH1 = document.querySelector("#footer-top h1");
  var clutter = "";
  footerH1.textContent.split("").forEach(function (letter) {
    clutter += `<span>${letter}</span>`;
  });
  footerH1.innerHTML = clutter;
  
  // GSAP animation for list items on hover
  document.querySelectorAll("#footer-content ul li").forEach(function (li) {
    li.addEventListener("mouseenter", function () {
      gsap.to(li, {
        scale: 1.2,
        duration: 0.3
      });
    });
    li.addEventListener("mouseleave", function () {
      gsap.to(li, {
        scale: 1,
        duration: 0.3
      });
    });
  });
  
  
  




    
