const cards = document.querySelectorAll('[data-js="card"]');

function addEventListenerToBookmarkToggleButton(card) {
  const bookmarkToggleButton = card.querySelector(
    '[data-js="card__bookmark-toggle-button"]'
  );
  bookmarkToggleButton.addEventListener("click", () => {
    bookmarkToggleButton.classList.toggle("card__bookmark-icon--selected");
  });
}

function addTitleTogglerToShowAnswerButton(card) {
  const showAnswerButton = card.querySelector(
    '[data-js="card__show-answer-button"]'
  );
  showAnswerButton.addEventListener("click", () => {
    if (showAnswerButton.textContent === "Show answer") {
      showAnswerButton.textContent = "Hide answer";
    } else {
      showAnswerButton.textContent = "Show answer";
    }
  });
}

function addAnswerTogglerToShowAnswerButton(card) {
  const showAnswerButton = card.querySelector(
    '[data-js="card__show-answer-button"]'
  );
  const cardAnswer = card.querySelector('[data-js="card__answer"]');
  showAnswerButton.addEventListener("click", () => {
    cardAnswer.classList.toggle("card__answer--hidden");
  });
}

cards.forEach((card) => {
  addEventListenerToBookmarkToggleButton(card);
  addTitleTogglerToShowAnswerButton(card);
  addAnswerTogglerToShowAnswerButton(card);
});
