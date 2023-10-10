const revealButton = document.getElementById("revealButton");
const hiddenCard = document.querySelector(".hidden-card");

revealButton.addEventListener("click", () => {
  hiddenCard.classList.toggle("show");
});
