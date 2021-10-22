const { html } = require("htm/preact");

function Hero({ data }) {
  return html`
    <section class="hero">
      <h1>${data.title}</h1>
      <p>${data.text}</p>
    </section>
  `;
}

module.exports = Hero;
