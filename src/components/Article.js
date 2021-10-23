const { html } = require("htm/preact");

function Article({ data }) {
  return data.map(
    ({ text, title }) =>
      html`<article>
        <h3>${title}</h3>
        <p>${text}</p>
      </article>`
  );
}

module.exports = Article;
