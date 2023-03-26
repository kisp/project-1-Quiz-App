const darkModeToggle = document.querySelector('[data-js="dark-mode-toggle"]');

if (darkModeToggle) {
  darkModeToggle.addEventListener("click", () => {
    const html = document.querySelector("html");
    localStorage.setItem(
      "dark-mode",
      JSON.stringify(!html.classList.contains("dark"))
    );
    html.classList.toggle("dark");
  });
}
