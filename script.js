function loadingAnimation() {
  var preloader = document.querySelector(".preloader");

  // GSAP Animation
  var tl = gsap.timeline();

  // Add GSAP animations
  tl.from(".rocket", { y: "-100vh", ease: "bounce.out", duration: 1 }, "-=0.5")
    .from(
      ".cloud1, .cloud2, .cloud3",
      { y: "-100vh", duration: 1, stagger: 0.5 },
      "-=0.5"
    )
    .to(".preloader", {
      opacity: 0,
      y: "-90vh",
      duration: 1,
      delay: 1,
      onComplete: showWebsiteContent,
    });

  // Function to show website content after preloader animation completes
  function showWebsiteContent() {
    preloader.classList.add("end-preloader");
    document.querySelector("#main").style.opacity = 1;
  }

  // Additional animations
  tl.from("#page1", {
    delay: 0.17,
    opacity: 0,
    duration: 0.4,
    ease: "power4.out",
  });

  tl.from("#nav-right", {
    opacity: 0,
    y: -80,
    duration: 0.45,
  });

  tl.from("#nav-left h3", {
    opacity: 0,
    y: -80,
    duration: 0.45,
    stagger: 0.2,
  });

  tl.from(
    "#header_content",
    {
      x: -100,
      opacity: 0,
      duration: 0.4,
    },
    "pjain"
  );

  var h2 = document.querySelector("#header_content h2");
  var h2Text = h2.textContent;
  var clutter = "";
  var splittedText = h2Text.split("");

  splittedText.forEach(function (elem) {
    clutter += `<span style="font-family: 'Roboto Condensed';">${elem}</span>`;
  });

  h2.innerHTML = clutter;

  tl.from(
    "h2 span",
    {
      x: -70,
      opacity: 0,
      duration: 0.3,
      stagger: 0.04,
      ease: "power4.out",
    },
    "pjain"
  );
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

function contentAnimation() {
  var t2 = gsap.timeline();

t2.from(".content", {
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 1,
  delay: 1.2,
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    start: "top 60%",
    end: "top 30%",
    toggleActions: "play none none none",
    scrub: 2,
  },
});

var aboutP = document.querySelectorAll(".aboutus p");

aboutP.forEach(function (elem) {
  var clutter = "";
  var PText = elem.textContent;
  var splittedText = PText.split("");
  splittedText.forEach(function (e) {
    clutter += `<span>${e}</span>`;
  });
  elem.innerHTML = clutter;
});

t2.from(
  ".aboutus",
  {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 1,
    scrollTrigger: {
      trigger: ".aboutus",
      scroller: "body",
      //  markers: true,
      start: "top 50%",
      end: "top 0%",
      scrub: 1,
    },
  },
  "-=-1"
);

t2.from(".aboutus p span", {
  stagger: 0.1,
  opacity: 0.5,
  y: 50,
  duration: 1,
  delay: 1,
  scrollTrigger: {
    trigger: ".aboutus",
    scroller: "body",
    start: "top 40%",
    end: "top 0%",
    scrub: 1,
  },
});


var cardP = document.querySelectorAll("#page3 p");

cardP.forEach(function (elem) {
  var clutter = "";
  var rText = elem.textContent;
  var splittedText = rText.split("");
  splittedText.forEach(function (e) {
    clutter += `<span>${e}</span>`;
  });
  elem.innerHTML = clutter;
});

t2.from(
  "#page3",
  {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 1,
    scrollTrigger: {
      trigger: "#page3",
      scroller: "body",
      //  markers: true,
      start: "top 70%",
      end: "top 0%",
      scrub: 1,
    },
  },
  "-=-1"
);

t2.from("#page3 p span", {
  // y: -50,
  x: -70,
  opacity: 0,
  duration: -0.3,
  stagger: 0.04,
  ease: "power4.out",
});



t2.from(".card, #card_btn", {
  opacity: 0,
  y: 50,
  duration: 0.7,
  stagger: 1,
  delay: 1,
  scrollTrigger: {
    trigger: "#page3",
    scroller: "body",
    start: "top 30%", // Animation starts when the top of trigger element reaches 80% of the viewport
    end: "top 0%", // Animation ends when the top of trigger element reaches 30% of the viewport
    toggleActions: "play none none none", // Animation will play when it enters the viewport and will not reverse
    scrub: 4, // Smoothly animates based on scroll position
  },
});

var portalP = document.querySelectorAll("#page4 p");

portalP.forEach(function (elem) {
  var clutter = "";
  var rText = elem.textContent;
  var splittedText = rText.split("");
  splittedText.forEach(function (e) {
    clutter += `<span>${e}</span>`;
  });
  elem.innerHTML = clutter;
});

t2.from(
  "#page4",
  {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 1,
    scrollTrigger: {
      trigger: "#page4",
      scroller: "body",
      //  markers: true,
      start: "top 70%",
      end: "top 0%",
      scrub: 1,
    },
  },
  "-=-1"
);

t2.from("#page4 p span", {
  stagger: 0.1,
  opacity: 0.5,
  y: 50,
  duration: 1,
  delay: 1,
  scrollTrigger: {
    trigger: "#page4 p",
    scroller: "body",
    // markers: true,
    start: "top 55%",
    end: "top 5%",
    scrub: 1,
  },
});


var recentP = document.querySelectorAll("#page5 p");

recentP.forEach(function (elem) {
  var clutter = "";
  var rText = elem.textContent;
  var splittedText = rText.split("");
  splittedText.forEach(function (e) {
    clutter += `<span>${e}</span>`;
  });
  elem.innerHTML = clutter;
});

t2.from(
  "#page5",
  {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 1,
    scrollTrigger: {
      trigger: "#page5",
      scroller: "body",
      //  markers: true,
      start: "top 70%",
      end: "top 0%",
      scrub: 1,
    },
  },
  "-=-1"
);

t2.from("#page5 p span", {
  stagger: 0.1,
  opacity: 0.5,
  y: 50,
  duration: 1,
  delay: 1,
  scrollTrigger: {
    trigger: "#page5 p",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    end: "top 20%",
    scrub: 1,
  },
});



var centerP = document.querySelectorAll("#page6 p");

centerP.forEach(function (elem) {
  var clutter = "";
  var pText = elem.textContent;
  var splittedText = pText.split("");
  splittedText.forEach(function (e) {
    clutter += `<span>${e}</span>`;
  });
  elem.innerHTML = clutter;
});

t2.from(
  "#page6",
  {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 1,
    scrollTrigger: {
      trigger: "#page6",
      scroller: "body",
      //  markers: true,
      start: "top 10%",
      end: "top -30%",
      scrub: 1,
    },
  },
  "-=-1"
);

t2.from("#page6 p span", {
  stagger: 0.1,
  opacity: 0.5,
  y: 50,
  duration: 1,
  delay: 1,
  scrollTrigger: {
    trigger: "#page6 p",
    scroller: "body",
    // markers: true,
    start: "top 65%",
    end: "top 30%",
    scrub: 1,
  },
});

t2.from("#page6 #lines h4", {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: "#page6 #lines h4",
    scroller: "body",
    start: "top 80%",
    end: "top 60%",
    scrub: 1,
  },
});

t2.from("#page6 #lines h5", {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: "#page6 #lines h5",
    scroller: "body",
    start: "top 80%",
    end: "top 60%",
    scrub: 1,
  },
});

t2.from("#page6 #lines h6", {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: "#page6 #lines h6",
    scroller: "body",
    start: "top 80%",
    end: "top 60%",
    scrub: 1,
  },
});

t2.from("#page6 #lines h3", {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: "#page6 #lines h3",
    scroller: "body",
    start: "top 80%",
    end: "top 60%",
    scrub: 1,
  },
});


t2.from("#footer", {
  opacity: 0,
  duration: 0.8,
  delay: 1.2,
  scrollTrigger: {
    trigger: "#footer",
    scroller: "body",
    scrub: 5,
    /*    markers: true, */
    start: "top -10%",
    end: "top -10%",
  },
});
}

contentAnimation();

function slideImage() {
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
    intervalId = setInterval(goNext, 1800);
  };

  // Function to stop the automatic sliding
  const stopAutoSlide = () => {
    clearInterval(intervalId);
  };

  // Start automatic sliding when the page loads
  startAutoSlide();

  // Pause automatic sliding when the user hovers over the slider
  // document
  //   .getElementById("slider")
  //   .addEventListener("click", stopAutoSlide);

  // Resume automatic sliding when the user moves the mouse out of the slider
//   document
//     .getElementById("slider")
//     .addEventListener("mouseleave", startAutoSlide);
}

slideImage();

function FooterAnimation() {
  // GSAP timeline for the footer animation
  var footerAnimation = gsap.timeline({
    scrollTrigger: {
      trigger: "#footer-top",
      scroller: "body", // Trigger when the footer comes into view
      //   markers: true,
      start: "top 80%", // Start animation when footer is 80% into view
      end: "top 20%", // End animation when footer is 70% into view
      scrub: 3, // Smooth scrubbing effect
    },
  });

  footerAnimation
    .from(
      "#footer-top img, #footer-top h1",
      {
        opacity: 0,
        y: -20,
        stagger: 0.2,
      },
      "+=0.5"
    )
    // Animation for #footer-content elements
    .from("#footer-content p, #footer-content ul", {
      opacity: 0,
      y: -20,
      stagger: 0.2,
    })
    // Animation for #footer-bottom elements
    .from("#footer-bottom h4", {
      opacity: 0,
      y: -20,
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
        duration: 0.3,
      });
    });
    li.addEventListener("mouseleave", function () {
      gsap.to(li, {
        scale: 1,
        duration: 0.3,
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
    .to(
      "#plain span",
      {
        opacity: 0,
        stagger: 0.1,
      },
      "a"
    )
    .to(
      "#silk span",
      {
        opacity: 1,
        stagger: 0.1,
        delay: 1,
      },
      "a"
    );

  // Function to check if footer is visible
  function isFooterVisible() {
    var rect = document.querySelector("#footer-top").getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  // Add mouse enter and leave event listeners to the #create div for animation
  var isAnimating = false; // Flag to track if animation is currently running

  document.querySelector("#create").addEventListener("mouseenter", function () {
    if (!isAnimating) {
      // Check if animation is not already running
      isAnimating = true; // Set flag to true to indicate animation is running
      tl7.restart(); // Restart the animation timeline
    }
  });

  document.querySelector("#create").addEventListener("mouseleave", function () {
    if (!isAnimating) {
      // Check if animation is not already running
      isAnimating = true; // Set flag to true to indicate animation is running
      gsap.to("#silk span", {
        opacity: 0,
        stagger: 0.1,
        onComplete: function () {
          isAnimating = false; // Reset flag when animation completes
        },
      });
      gsap.to("#plain span", {
        opacity: 1,
        stagger: 0.1,
        delay: 0.5,
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


function showOverlay(card) {
  card.classList.add('show-overlay');
}
// Function to hide overlay on mouse leave
function hideOverlay(card) {
  card.classList.remove('show-overlay');
}

// Function to show overlay on button click
function showOverlayOnClick(button) {
  const card = button.parentElement;
  card.classList.add('show-overlay');
}

// Attach hover event listeners to cards
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseover', () => showOverlay(card));
  card.addEventListener('mouseleave', () => hideOverlay(card));
});