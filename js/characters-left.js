const charactersLeftElements = document.querySelectorAll(
  '[data-controller="characters-left"]'
);

charactersLeftElements.forEach((charactersLeftElement) => {
  const input = charactersLeftElement.querySelector(
    '[data-characters-left-target="input"]'
  );
  const output = charactersLeftElement.querySelector(
    '[data-characters-left-target="output"]'
  );

  input.addEventListener("input", () => {
    const maxLength = parseInt(input.getAttribute("maxlength"));
    const inputLength = input.value.length;
    const leftCharacters = maxLength - inputLength;
    output.textContent = `${leftCharacters} characters left`;
  });
});
