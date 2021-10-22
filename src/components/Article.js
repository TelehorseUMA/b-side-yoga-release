const { html } = require("htm/preact");

function Article({ data }) {
  return html`<article>
    <h3>${data.title}</h3>
    <p>${data.text}</p>
  </article>`;
}

module.exports = Article;
