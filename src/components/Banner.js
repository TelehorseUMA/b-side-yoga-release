const { html } = require("htm/preact");

function Banner({ data }) {
  return html`<section class="banner"><h1>${data.title}</h1></section>`;
}

module.exports = Banner;
