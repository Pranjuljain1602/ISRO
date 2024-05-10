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




function slideImage(){

 const slides = document.querySelectorAll(".slide");
const radioButton = document.querySelectorAll(".button");

let counter = 0;
let intervalId; // Variable to store the interval ID

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const goNext = () => {
    counter++;
    if (counter >= slides.length) {
        counter = 0; // Reset counter to 0 if it exceeds the number of slides
    }
    slideImage();
};


const slideImage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });

    radioButton.forEach((radio, i) => {
        radio.checked = i === counter;
    });
};

const changeSlide = (slideNumber) => {
    counter = slideNumber;
    slideImage();
};

// Function to start the automatic sliding
const startAutoSlide = () => {
    intervalId = setInterval(goNext, 1500);
};

// Function to stop the automatic sliding
const stopAutoSlide = () => {
    clearInterval(intervalId);
};

// Start automatic sliding when the page loads
startAutoSlide();

// Pause automatic sliding when the user hovers over the slider
document.getElementById("slider").addEventListener("mouseenter", stopAutoSlide);

// Resume automatic sliding when the user moves the mouse out of the slider
document.getElementById("slider").addEventListener("mouseleave", startAutoSlide);

}

slideImage();



function FooterAnimation(){

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


 // Apply GSAP animation to the h1 elements inside the #create div
document.querySelectorAll("#create h1").forEach(function (h) {
    var clutter = "";
    h.textContent.split("").forEach(function (letter) {
      clutter += `<span>${letter}</span>`;
    });
    h.innerHTML = clutter;
  });

// Define GSAP timeline for the footer animation
var tl7 = gsap.timeline({ paused: true });
tl7
.to("#plain span", {
  opacity: 0,
  stagger: 0.1
}, "a")
.to("#silk span", {
  opacity: 1,
  stagger: 0.1,
  delay: 1
}, "a");

// Function to check if footer is visible
function isFooterVisible() {
  var rect = document.querySelector("#footer-top").getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

// Add mouse enter and leave event listeners to the #create div for animation
var isAnimating = false; // Flag to track if animation is currently running

document.querySelector("#create").addEventListener("mouseenter", function () {
  if (!isAnimating) { // Check if animation is not already running
    isAnimating = true; // Set flag to true to indicate animation is running
    tl7.restart(); // Restart the animation timeline
  }
});

document.querySelector("#create").addEventListener("mouseleave", function () {
  if (!isAnimating) { // Check if animation is not already running
    isAnimating = true; // Set flag to true to indicate animation is running
    gsap.to("#silk span", {
      opacity: 0,
      stagger: 0.1,
      onComplete: function () {
        isAnimating = false; // Reset flag when animation completes
      }
    });
    gsap.to("#plain span", {
      opacity: 1,
      stagger: 0.1,
      delay: 0.5
    });
  }
});

// Check footer visibility and trigger animation accordingly
function checkFooterVisibility() {
  if (isFooterVisible()) {
    tl7.restart();
  }
}

// Listen for scroll events to check footer visibility
window.addEventListener("scroll", checkFooterVisibility);

// Initial check for footer visibility on page load
checkFooterVisibility();

Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

Shery.makeMagnet("#Copyright");

}

FooterAnimation();
