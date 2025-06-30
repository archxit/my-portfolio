document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

document.querySelector(".header-twitter").addEventListener("click", () => {
  window.open("https://twitter.com/archxit", "_blank");
});
document.querySelector(".header-mail").addEventListener("click", () => {
  window.open("mailto:architsrivastava1107@gmail.com", "_blank");
});

const scrollTopBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    scrollTopBtn.classList.add("visible");
  } else {
    scrollTopBtn.classList.remove("visible");
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

document.getElementById("rec-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value || "Anonymous";
  const message = document.getElementById("message").value;

  if (message.trim()) {
    // Create new recommendation card
    const recommendationsGrid = document.querySelector(".recommendations-grid");
    const newRecommendation = document.createElement("div");
    newRecommendation.className = "recommendation-card";
    newRecommendation.style.opacity = "0";
    newRecommendation.style.transform = "translateY(20px)";
    newRecommendation.innerHTML = `"${message}" - ${name}`;

    recommendationsGrid.appendChild(newRecommendation);

    // Animate in
    setTimeout(() => {
      newRecommendation.style.transition = "all 0.5s ease";
      newRecommendation.style.opacity = "1";
      newRecommendation.style.transform = "translateY(0)";
    }, 100);

    // Clear form
    this.reset();

    // Show success message
    const submitBtn = document.querySelector(".submit-btn");
    const originalText = submitBtn.textContent;
    submitBtn.textContent = "Thank you!";
    submitBtn.style.background = "#28a745";

    setTimeout(() => {
      submitBtn.textContent = originalText;
      submitBtn.style.background =
        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
    }, 2000);
  }
});
