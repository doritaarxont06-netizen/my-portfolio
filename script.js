document.addEventListener("DOMContentLoaded", function () {

  // =====================
  // FADE IN ON SCROLL
  // =====================
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.15 });

  sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
  });


  // =====================
  // MOBILE MENU
  // =====================
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  hamburger?.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });


  // =====================
  // ACTIVE LINK SCROLL
  // =====================
  const links = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    let current = "";

    document.querySelectorAll("section").forEach(section => {
      const sectionTop = section.offsetTop - 100;

      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    links.forEach(link => {
      link.classList.remove("active-link");

      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active-link");
      }
    });
  });


  // =====================
  // LOADER (FIXED - NO STUCK)
  // =====================
  window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    if (!loader) return;

    setTimeout(() => {
      loader.style.opacity = "0";
      loader.style.transition = "0.5s ease";

      setTimeout(() => {
        loader.style.display = "none";
      }, 500);

    }, 900);
  });


  // =====================
  // TYPEWRITER (FIXED - NO LOAD CONFLICT)
  // =====================
  const text = "Modern Websites Built for Your Business";
  let i = 0;

  function typeWriter() {
    const el = document.getElementById("typing");
    if (!el) return;

    if (i < text.length) {
      el.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 50);
    }
  }

  typeWriter();


  // =====================
  // EMAILJS (ONLY ONCE - FIXED)
  // =====================
  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      emailjs.sendForm(
        "service_3mavweq",
        "template_flwx116",
        this
      )
      .then(() => {
        alert("Message sent successfully!");
        form.reset();
      })
      .catch((error) => {
        console.log(error);
        alert("Error sending message");
      });
    });
  }


  // =====================
  // PROGRESS BAR
  // =====================
  window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = (scrollTop / scrollHeight) * 100;

    const bar = document.getElementById("progress-bar");
    if (bar) bar.style.width = scrolled + "%";
  });


  // =====================
  // SMOOTH SCROLL
  // =====================
  document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const target = document.querySelector(link.getAttribute("href"));

      if (target) {
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });

});
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  if (!loader) return;

  // MOBILE → instant skip
  if (window.innerWidth <= 768) {
    loader.style.display = "none";
    return;
  }

  // DESKTOP → Apple-style delay
  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.transition = "0.5s ease";

    setTimeout(() => {
      loader.style.display = "none";
    }, 500);

  }, 1200);
});