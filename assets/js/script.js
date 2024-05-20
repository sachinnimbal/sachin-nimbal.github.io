document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("currentYear").textContent = new Date().getFullYear();
});

document.addEventListener("DOMContentLoaded", function () {
  const typedElement = document.querySelector(".typed");
  if (typedElement) {
    let typedStrings = typedElement.getAttribute("data-typed-items");
    typedStrings = typedStrings.split(",");
    new Typed(".typed", {
      strings: typedStrings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.querySelectorAll(".button");
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      button.classList.toggle("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".about-btn a")
    .addEventListener("click", function (e) {
      e.preventDefault();
      const href = this.getAttribute("href");

      if ("scrollBehavior" in document.documentElement.style) {
        window.scroll({
          top: document.querySelector(href).offsetTop,
          behavior: "smooth",
        });
      } else {
        location.href = href;
      }
    });
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".footer-nav a").forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const href = this.getAttribute("href");
      
      const targetSection = document.querySelector(href);
      if (targetSection) {
        if ("scrollBehavior" in document.documentElement.style) {
          window.scroll({
            top: targetSection.offsetTop,
            behavior: "smooth"
          });
        } else {
          location.href = href; 
        }
      }
    });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const skillsSection = document.querySelector("#skills");
  const circles = document.querySelectorAll(".progress-ring__circle");
  const skills = [65, 90, 80, 55, 80, 85, 85, 60, 10];

  circles.forEach((circle, index) => {
    const radius = circle.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    if (window.innerWidth < 768) {
      const offset = circumference - (skills[index] / 100) * circumference;
      circle.style.strokeDashoffset = offset;
    } else {
      circle.style.strokeDashoffset = circumference;
    }
  });

  if (window.innerWidth >= 768) {
    const animateSkills = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          circles.forEach((circle, index) => {
            setTimeout(() => {
              const radius = circle.r.baseVal.value;
              const circumference = radius * 2 * Math.PI;
              const offset =
                circumference - (skills[index] / 100) * circumference;
              circle.style.transition = "stroke-dashoffset 2s ease-out";
              circle.style.strokeDashoffset = offset;
            }, index * 250);
          });
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(animateSkills, {
      root: null,
      threshold: 0.5,
    });

    observer.observe(skillsSection);
  }
});

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("backToTopBtn").style.display = "block";
    } else {
        document.getElementById("backToTopBtn").style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}
