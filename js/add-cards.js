const addCardsForm = document.querySelector('[data-js="add-cards-form"]');
const questionInput = document.querySelector('[data-js="question-input"]');
const answerInput = document.querySelector('[data-js="answer-input"]');
const tagInput = document.querySelector('[data-js="tag-input"]');

const addCardsContainer = document.querySelector(
  '[data-js="add-cards-container"]'
);

addCardsForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const question = questionInput.value;
  const answer = answerInput.value;
  let tag = tagInput.value;

  if (!tag.startsWith("#")) {
    tag = `#${tag}`;
  }

  const cardMTree = renderCard({ question, answer, tag });
  const cardElement = createDOMElementsFromMTree(cardMTree);

  if (addCardsContainer.children[0]) {
    addCardsContainer.children[0].remove();
  }
  addCardsContainer.appendChild(cardElement);
});

function renderCard({ question, answer, tag }) {
  return m("article", { class: "card", "data-js": "card" }, [
    // question is inserted here
    m("h2", { class: "card__question" }, question),
    m(
      "div",
      {
        class: "card__answer card__answer--hidden",
        "data-js": "card__answer",
      },
      [
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg" },
          m("use", {
            // To repeat xmlns here is a little
            // hack. createDOMElementsFromMTree currently does not
            // propagate xmlns declarations
            xmlns: "http://www.w3.org/2000/svg",
            href: "#blockquote-icon",
          })
        ),
        // answer is inserted here
        m("p", answer),
      ]
    ),
    m(
      "div",
      { class: "center-horizontally" },
      m(
        "button",
        { class: "primary-button", "data-js": "card__show-answer-button" },
        " Show answer "
      )
    ),
    m("ul", { class: "tag-list" }, [
      // tag is inserted here
      m("li", { class: "tag-list__item" }, m("a", { href: "#" }, tag)),
    ]),
    m("button", {
      class: "card__bookmark-icon",
      "data-js": "card__bookmark-toggle-button",
    }),
  ]);
}

function m(tag, maybeAttributes, ...children) {
  if (
    Array.isArray(children) &&
    children.length === 1 &&
    Array.isArray(children[0])
  ) {
    children = children[0];
  }

  let attributes;
  let realChildren;
  if (maybeAttributes === undefined) {
    attributes = {};
    realChildren = [];
  } else if (typeof maybeAttributes === "string") {
    attributes = {};
    realChildren = [maybeAttributes, ...children];
  } else if (maybeAttributes._m === "m") {
    attributes = {};
    realChildren = [maybeAttributes, ...children];
  } else {
    attributes = maybeAttributes;
    realChildren = children;
  }
  return { _m: "m", tag: tag, attributes: attributes, children: realChildren };
}

function createDOMElementsFromMTree(mTree) {
  // console.log(mTree);
  // console.log(JSON.stringify(mTree));

  if (typeof mTree === "string") {
    return document.createTextNode(mTree);
  }

  const { tag, attributes, children } = mTree;
  let elt;
  if (attributes.xmlns) {
    // we need to be able to create an svg element...
    elt = document.createElementNS(attributes.xmlns, tag);
  } else {
    elt = document.createElement(tag);
  }
  for (const key in attributes) {
    elt.setAttribute(key, attributes[key]);
  }
  children
    .map(createDOMElementsFromMTree)
    .forEach((child) => elt.appendChild(child));
  return elt;
}
