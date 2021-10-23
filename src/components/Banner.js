const { html } = require("htm/preact");

function Banner({ data }) {
  return data.map(
    ({ title }) =>
      html`<section class="banner">
        <h1>${title}</h1>
      </section>`
  );
}

module.exports = Banner;
