/* Loading */
window.onload = () => {
  document.getElementById("loading").style.display = "none";
};

/* Dark Mode */
const themeBtn = document.getElementById("themeBtn");
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

themeBtn.onclick = () => {
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
};

/* Smooth Scroll */
document.querySelectorAll("a[href^='#']").forEach(link => {
  link.onclick = e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  };
});

/* Scroll Animation + Back to top */
window.addEventListener("scroll", () => {
  document.querySelectorAll(".box").forEach(box => {
    if (box.getBoundingClientRect().top < window.innerHeight - 100) {
      box.classList.add("show");
    }
  });

  document.getElementById("topBtn").style.display =
    window.scrollY > 300 ? "block" : "none";
});

/* Back to top */
document.getElementById("topBtn").onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

/* Modal */
const modal = document.getElementById("modal");
document.getElementById("openModal").onclick = () => {
  modal.style.display = "flex";
};
document.getElementById("closeModal").onclick = () => {
  modal.style.display = "none";
};

/* Typing Effect */
const text = "Chào mừng đến với Website JavaScript";
let i = 0;

function typing() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text[i++];
    setTimeout(typing, 100);
  }
}
typing();
