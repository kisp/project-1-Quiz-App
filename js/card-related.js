const cards = document.querySelectorAll('[data-js="card"]');

cards.forEach((card) => {
  const bookmarkToggleButton = card.querySelector(
    '[data-js="card__bookmark-toggle-button"]'
  );
  bookmarkToggleButton.addEventListener("click", () => {
    bookmarkToggleButton.classList.toggle("card__bookmark-icon--selected");
  });
});
