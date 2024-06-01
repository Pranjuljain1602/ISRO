function loadingAnimation() {
  var preloader = document.querySelector(".preloader");

  var tl = gsap.timeline();

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

  function showWebsiteContent() {
    preloader.classList.add("end-preloader");
    document.querySelector("#main").style.opacity = 1;
  }

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

  function createAnimation(isMobile) {
    if (isMobile) {
      tl.from(
        "#header_content",
        {
          x: -100,
          opacity: 0,
          duration: 0.5,
        },
        "pjain"
      );
      tl.from(
        "h2 span",
        {
          x: -80,
          opacity: 0,
          duration: 0.5,
          stagger: 0.05,
          ease: "power2.out",
        },
        "pjain"
      );
    } else {
      tl.from(
        "#header_content",
        {
          x: -100,
          opacity: 0,
          duration: 0.4,
        },
        "pjain"
      );
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
  }
  
  function initTextAnimation() {
    var h2 = document.querySelector("#header_content h2");
    var h2Text = h2.textContent;
    var clutter = "";
    var splittedText = h2Text.split("");
  
    splittedText.forEach(function (elem) {
      clutter += `<span style="font-family: 'Roboto Condensed';">${elem}</span>`;
    });
  
    h2.innerHTML = clutter;
  }
  
  var isMobile = window.matchMedia("(max-width: 600px)").matches;
  
  initTextAnimation();

  createAnimation(isMobile);
  

  window.addEventListener('resize', function () {
    isMobile = window.matchMedia("(max-width: 600px)").matches;
    createAnimation(isMobile);
  });
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

gsap.registerPlugin(ScrollTrigger);

function splitTextAnimation() {
  document.querySelectorAll("#page2 .content h3").forEach(function(h3) {
    var h3Text = h3.textContent;
    var clutter = "";
    var splittedText = h3Text.split("");
    
    splittedText.forEach(function(elem) {
      clutter += `<span style="font-family: 'Roboto Condensed';">${elem}</span>`;
    });
    
    h3.innerHTML = clutter;
  });
}

function contentAnimation() {
  splitTextAnimation();
  
  let mm = gsap.matchMedia();
  
  mm.add("(max-width: 600px)", () => {
    // Mobile animation settings
    var t2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        start: "top 80%", 
        end: "top 0%",
        toggleActions: "play none none none",
        scrub: 3,
      },
    });
  
    t2.from(".content", {
      opacity: 0,
      y: 40, 
      duration: 0.6,
      stagger: 0.5,
    });

    gsap.from("#page2 .content h3 span", {
      x: -180,
      opacity: 0,
      duration: 0.6,
      stagger: 0.08,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        start: "top 70%", 
        end: "top 0%",
        toggleActions: "play none none none",
        scrub: 3,
      },
    });
  });
  
  
  mm.add("(min-width: 601px)", () => {
    // Desktop animation settings
    var t2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        start: "top 60%",
        end: "top 30%",
        toggleActions: "play none none none",
        scrub: 2,
      },
    });
  
    t2.from(".content", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 1,
      delay: 1.2,
    });

    gsap.from("#page2 .content h3 span", {
      x: -80,
      opacity: 0,
      duration: 0.5,
      stagger: 0.05,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        start: "top 60%",
        end: "top 30%",
        toggleActions: "play none none none",
        scrub: 2,
      },
    });
  });
  

  var aboutP = document.querySelectorAll(".aboutus p");

  aboutP.forEach(function (elem) {
    var clutter = "";
    var PText = elem.textContent;
    if (window.innerWidth < 600) {
      PText = PText.substring(0, 227); // Display only the first 150 characters
      PText += "..."; // Add an ellipsis to indicate text truncation
    }
    var splittedText = PText.split("");
    splittedText.forEach(function (e) {
      clutter += `<span>${e}</span>`;
    });
    elem.innerHTML = clutter;
  });

  var t2 = gsap.timeline();

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

  function animateText(elem) {
    gsap.killTweensOf(elem.querySelectorAll("span"));

    gsap.set(elem.querySelectorAll("span"), {
      x: -70,
      opacity: 0
    });

    gsap.fromTo(elem.querySelectorAll("span"), 
      {
        x: -70,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.04,
        ease: "power4.out"
      }
    );
  }

  document.querySelectorAll('#page3 .card').forEach(function(card) {
    card.addEventListener('mouseenter', function() {
      animateText(this.querySelector('.overlay p'));
    });
  });

  let mm2 = gsap.matchMedia();

  mm2.add("(max-width: 600px)", () => {
    // Mobile animation settings
    gsap.from(
      "#page3",
      {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: "#page3",
          scroller: "body",
          start: "top 70%",
          end: "top 0%", 
          scrub: 1,
        },
      },
      "-=-0.5"
    );

    t2.from(".card, #card_btn", {
      opacity: 0,
      y: 50,
      duration: 0.7,
      stagger: 0.8,
      delay: 0.7,
      scrollTrigger: {
        trigger: ".card, #card_btn",
        scroller: "body",
        start: "top 50%",
        end: "top -200%",
        toggleActions: "play none none none",
        scrub: 4,
      },
    });
  });

  mm2.add("(min-width: 601px)", () =>{
    gsap.from(
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

  t2.from(".card, #card_btn", {
    opacity: 0,
    y: 50,
    duration: 0.7,
    stagger: 1,
    delay: 1,
    scrollTrigger: {
      trigger: "#page3",
      scroller: "body",
      start: "top 30%",
      end: "top 0%",
      toggleActions: "play none none none",
      scrub: 4,
    },
  });
  })

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
      start: "top 50%",
      end: "top 10%",
      scrub: 1,
    },
  });

  let mm3 = gsap.matchMedia();

  mm3.add("(max-width: 600px)", () => {
    // Mobile animation settings
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
        y: 30,
        duration: 0.8, 
        delay: 0.5,
        scrollTrigger: {
          trigger: "#page5",
          scroller: "body",
          start: "top 90%",
          end: "top 50%",
          scrub: 1,
        },
      },
      "-=-0.5"
    );

    t2.from("#page5 p span", {
      stagger: 0.05,
      opacity: 0.5,
      y: 30,
      duration: 0.5,
      delay: 0.2,
      scrollTrigger: {
        trigger: "#page5 p",
        scroller: "body",
        start: "top 60%",
        end: "top 30%",
        scrub: 1,
      },
    });

    t2.to("#slider", {
      width: "90%",
      zIndex: 100, 
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: "#page5",
        scroll: "body",
        start: "top 40%",
        end: "top 0%",
        scrub: 2,
        pin: true,
      },
    });
  });

  mm3.add("(min-width: 601px)", () => {
    // Desktop animation settings
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
        start: "top 70%",
        end: "top 40%",
        scrub: 1,
      },
    });

    t2.to("#slider", {
      width: "70%",
      zIndex: 100, 
      duration: 1,
      delay: 1,
      scrollTrigger: {
        trigger: "#page5",
        scroll: "body",
        start: "top 0%",
        end: "top 40%",
        scrub: 3,
        pin: true,
      },
    });
  });

  let mm4 = gsap.matchMedia();

  mm4.add("(max-width: 600px)", () => {
    // Mobile animation settings
    let t2 = gsap.timeline();
    
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
        y: 30,
        duration: 0.8,
        delay: 0.5,
        scrollTrigger: {
          trigger: "#page6",
          scroller: "body",
          start: "top 80%",
          end: "top 10%",
          scrub: 2,
        },
      },
      "-=-0.5"
    );

    t2.from("#page6 p span", {
      stagger: 0.05,
      opacity: 0.5,
      y: 30,
      duration: 0.8,
      delay: 0.5,
      scrollTrigger: {
        trigger: "#page6 p",
        scroller: "body",
        start: "top 100%",
        end: "top 20%",
        scrub: 2,
      },
    });
  });

  mm4.add("(min-width: 601px)", () => {
    // Desktop animation settings
    let t2 = gsap.timeline();
    
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
          start: "top 40%",
          end: "top -40%",
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
        start: "top 65%",
        end: "top 30%",
        scrub: 1,
      },
    });
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

  let mm5 = gsap.matchMedia();

  mm5.add("(max-width: 600px)", () => {
    // Mobile animation settings for #footer
    t2.from("#footer", {
      opacity: 0,
      duration: 0.5,
      delay: 0.5,
      scrollTrigger: {
        trigger: "#footer",
        scroller: "body",
        scrub: 2,
        start: "top 60%",
        end: "top 10%",
      },
    });
  });

  mm5.add("(min-width: 601px)", () => {
    // Desktop animation settings for #footer
    t2.from("#footer", {
      opacity: 0,
      duration: 0.8,
      delay: 1.2,
      scrollTrigger: {
        trigger: "#footer",
        scroller: "body",
        scrub: 5,
        start: "top -10%",
        end: "top -10%",
      },
    });
  });
}

contentAnimation();


function slideImage() {
  const slides = document.querySelectorAll(".slide");
  const radioButton = document.querySelectorAll(".button");

  let counter = 0;
  let intervalId;

  slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
  });

  const goNext = () => {
    counter++;
    if (counter >= slides.length) {
      counter = 0;
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
}

slideImage();

function FooterAnimation() {
  let mm6 = gsap.matchMedia();

  // Mobile animation settings
  mm6.add("(max-width: 600px)", () => {
    var footerAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#footer-top",
        scroller: "body",
        start: "top 90%",
        end: "top -90%",
        scrub: 2,
      },
    });

    footerAnimation
      .from(
        "#footer-top img, #footer-top h1",
        {
          opacity: 0,
          y: -10,
          stagger: 0.1,
        },
        "+=0.3"
      )
      .from("#footer-content h4, #footer-content ul", {
        opacity: 0,
        y: -10,
        stagger: 0.1,
      })
      .from("#footer-bottom h4", {
        opacity: 0,
        y: 10,
      });

    // Apply shared effects
    applyCommonFooterEffects();
  });

  // Desktop animation settings
  mm6.add("(min-width: 601px)", () => {
    var footerAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#footer-top",
        scroller: "body",
        start: "top 80%",
        end: "top 20%",
        scrub: 3,
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
      .from("#footer-content h4, #footer-content ul", {
        opacity: 0,
        y: -20,
        stagger: 0.2,
      })
      .from("#footer-bottom h4", {
        opacity: 0,
        y: -20,
      });

    // Apply shared effects
    applyCommonFooterEffects();
  });

  function applyCommonFooterEffects() {
    var footerH1 = document.querySelector("#footer-top h1");
    var clutter = "";
    footerH1.textContent.split("").forEach(function (letter) {
      clutter += `<span>${letter}</span>`;
    });
    footerH1.innerHTML = clutter;

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

    document.querySelectorAll("#create h1").forEach(function (h) {
      var clutter = "";
      h.textContent.split("").forEach(function (letter) {
        clutter += `<span>${letter}</span>`;
      });
      h.innerHTML = clutter;
    });

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

    function isFooterVisible() {
      var rect = document.querySelector("#footer-top").getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight)
      );
    }

    var isAnimating = false;

    document.querySelector("#create").addEventListener("mouseenter", function () {
      if (!isAnimating) {
        isAnimating = true;
        tl7.restart();
      }
    });

    document.querySelector("#create").addEventListener("mouseleave", function () {
      if (!isAnimating) {
        isAnimating = true;
        gsap.to("#silk span", {
          opacity: 0,
          stagger: 0.1,
          onComplete: function () {
            isAnimating = false;
          },
        });
        gsap.to("#plain span", {
          opacity: 1,
          stagger: 0.1,
          delay: 0.5,
        });
      }
    });

    function checkFooterVisibility() {
      if (isFooterVisible()) {
        tl7.restart();
      }
    }

    window.addEventListener("scroll", checkFooterVisibility);

    checkFooterVisibility();

    Shery.mouseFollower({
      skew: true,
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 1,
    });

    Shery.makeMagnet("#Copyright");
  }
}

FooterAnimation();


function cardOverlayAnimation(){
  function showOverlay(card) {
    card.classList.add('show-overlay');
  }
  
  function hideOverlay(card) {
    card.classList.remove('show-overlay');
  }
  
  function showOverlayOnClick(button) {
    const card = button.parentElement;
    card.classList.add('show-overlay');
  }
  
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseover', () => showOverlay(card));
    card.addEventListener('mouseleave', () => hideOverlay(card));
  });
}

cardOverlayAnimation();

function transitionToPage5() {
  document.querySelector('#page5').scrollIntoView({
      behavior: 'smooth'
  });
}


function transitionToPage2() {
  document.querySelector('#page2').scrollIntoView({
      behavior: 'smooth'
  });
}

function transitionToPage6() {
  document.querySelector('#page6').scrollIntoView({
      behavior: 'smooth'
  });
}

function transitionToabout() {
  document.querySelector('#about').scrollIntoView({
      behavior: 'smooth'
  });
}

function transitionToportal() {
  document.querySelector('#portals').scrollIntoView({
      behavior: 'smooth'
  });
}

function transitionToservice() {
  document.querySelector('#services').scrollIntoView({
      behavior: 'smooth'
  });
}

function navbarTransition() {
  document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const closeIcon = document.getElementById("close-icon");
    const navLeft = document.getElementById("nav-left");

    menuIcon.addEventListener("click", function () {
      navLeft.classList.add("show");
      gsap.fromTo(
        "#nav-left h3",
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0, duration: 0.6, stagger: 0.3 }
      );
    });

    closeIcon.addEventListener("click", function () {
      navLeft.classList.remove("show");
    });

    document.querySelectorAll("#nav-left h3").forEach(function (menuItem) {
      menuItem.addEventListener("click", function () {
        navLeft.classList.remove("show");

        const section = menuItem.textContent.toLowerCase(); // convert text to lowercase
        const targetSection = document.getElementById(section);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    function activate(e) {
      const items = document.querySelectorAll(".item");
      if (e.target.matches(".next")) {
        slider.append(items[0]);
      }
      if (e.target.matches(".prev")) {
        slider.prepend(items[items.length - 1]);
      }
    }

    document.addEventListener("click", activate, false);
  });
}

navbarTransition();
