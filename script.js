function enterBlackHole() {
  const bh = document.getElementById("blackhole");

  bh.style.opacity = "1";
  bh.style.width = "3000px";
  bh.style.height = "3000px";

  document.body.style.transition = "transform 1.2s ease";
  document.body.style.transform = "scale(0.95)";

  setTimeout(() => {
    // redirect later if you want
    // window.location.href = "chat.html";
  }, 1200);
}
