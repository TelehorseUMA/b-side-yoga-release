const { html } = require("htm/preact");

module.exports = ({ children }) =>
  html`<div class="LayoutBase">
    <!-- header -->
    <main>${children}</main>
    <!-- footer -->
  </div>`;
