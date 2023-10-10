const data = [
    { title: "Yacht 1", content: "This is the content for Card 1.", image: "yacht1.jpeg" },
    { title: "Yacht 2", content: "This is the content for Card 2.", image: "yacht2.jpeg" },
    { title: "Yacht 3", content: "This is the content for Card 3.", image: "yacht3.jpeg" },
    { title: "Yacht 4", content: "This is the content for Card 4.", image: "yacht4.jpeg" },
  ];
  
  function createCard({ title, content, image }) {
    const card = document.createElement("div");
    card.classList.add("card");
  
    const cardImage = document.createElement("img");
    cardImage.src = image;
  
    const cardTitle = document.createElement("h2");
    cardTitle.textContent = title;
  
    const cardContent = document.createElement("p");
    cardContent.textContent = content;
  
    card.appendChild(cardImage);
    card.appendChild(cardTitle);
    card.appendChild(cardContent);
  
    return card;
  }
  
  function renderCards() {
    const root = document.getElementById("root");
  
    data.forEach((item) => {
      const card = createCard(item);
      root.appendChild(card);
    });
  }
  
  renderCards();
  /*ang sa nav bar nga javascript na d sa dalom*/
  const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  menu.classList.toggle("open");
});

/*Import lang ta react classes*/
