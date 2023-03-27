const cards = document.querySelectorAll('[data-js="card"]');

cards.forEach((card) => {
  console.log(card.querySelector('[data-js="card__bookmark-toggle-button"]'));
});
