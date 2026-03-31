var typed = new Typed(".typing", {
  strings: ["Software Engineer"],
  loop: true,
  typeSpeed: 50,
  backSpeed: 30,
  backDelay: 2000,
  startDelay: 500,
});

function showAlert() {
  Swal.fire({
    title: "Notification",
    text: "Coming soon!",
    icon: "info",
    confirmButtonText: "OK",
    confirmButtonColor: "#10b981",
  });
}

particlesJS("particles-js", {
  particles: {
    number: { value: 40, density: { enable: true, value_area: 1000 } },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: {
      value: 0.08,
      random: true,
      anim: { enable: true, speed: 0.5, opacity_min: 0.02 },
    },
    size: { value: 2, random: true },
    line_linked: {
      enable: true,
      distance: 180,
      color: "#ffffff",
      opacity: 0.04,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.8,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: false },
      resize: true,
    },
    modes: {
      grab: { distance: 140, line_linked: { opacity: 0.12 } },
    },
  },
  retina_detect: true,
});

function animateStats() {
  const stats = document.querySelectorAll(".stat-number");
  stats.forEach((stat) => {
    const target = parseInt(stat.getAttribute("data-target"));
    const duration = 1500;
    const startTime = performance.now();

    const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

    const updateCounter = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuart(progress);
      stat.textContent = Math.round(easedProgress * target) + "+";
      if (progress < 1) requestAnimationFrame(updateCounter);
    };
    requestAnimationFrame(updateCounter);
  });
}

window.addEventListener("load", () => {
  setTimeout(animateStats, 800);
});
