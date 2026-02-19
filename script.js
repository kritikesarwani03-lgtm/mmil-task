const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

document.querySelectorAll(".course-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Course details coming soon!");
  });
});

const elements = document.querySelectorAll(".animate");

window.addEventListener("scroll", () => {
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      el.classList.add("show");
    }
  });
});

let index = 0;
const slides = document.querySelectorAll(".review-card");

function showSlide() {
  slides.forEach(s => s.style.display = "none");
  slides[index].style.display = "block";
  index = (index + 1) % slides.length;
}

setInterval(showSlide, 3000);


document.querySelector("form").addEventListener("submit", function(e) {
  const email = document.querySelector("#email").value;

  if (!email.includes("@")) {
    alert("Enter valid email!");
    e.preventDefault();
  }
});