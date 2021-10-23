const path = require("path");
const prettier = require("prettier");

module.exports = function (eleventyConfig) {
  const env = process.env.ELEVENTY_ENV;

  if (env === "dev") {
    eleventyConfig.addTransform("prettier", function (content, outputPath) {
      const extension = path.extname(outputPath);
      switch (extension) {
        case ".html":
          const parser = extension.replace(/^./, "");
          return prettier.format(content, { parser });
        default:
          return content;
      }
    });
  }

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
