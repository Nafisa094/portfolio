
// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Dark Mode Toggle
const toggle = document.getElementById("darkModeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  if(name && email && message){
    alert("Message sent successfully!");
    this.reset();
  } else {
    alert("Please fill in all fields.");
  }
});
