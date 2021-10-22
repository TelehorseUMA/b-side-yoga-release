const { html } = require("htm/preact");
const LayoutBase = require("./LayoutBase");

const components = {
  hero: require("./Hero"),
  article: require("./Article"),
  banner: require("./Banner"),
};

module.exports = ({ page }) =>
  html`<div class="App">
    <${LayoutBase}>
      ${page.sections.map(
        ({ data, type }) => html`<${components[type]} data=${data} />`
      )}
    <//>
  </div>`;
