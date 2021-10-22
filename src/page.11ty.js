const { html } = require("htm/preact");
const render = require("preact-render-to-string");
const App = require("./components/App");

module.exports = class Page {
  data() {
    return {
      title: "B-Side-Yoga",
      layout: "layout.njk",
      pagination: {
        data: "pages",
        size: 1,
        alias: "page",
        addAllPagesToCollection: true,
      },
      permalink: ({ page }) => `/${page.slug}/index.html`,
    };
  }

  render(data) {
    return render(html`<${App} page=${data.page} />`);
  }
};
