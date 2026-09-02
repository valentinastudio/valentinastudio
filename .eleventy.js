module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addShortcode("currentYear", () => `${new Date().getFullYear()}`);
  eleventyConfig.addFilter("currency", (num) => {
    if (num === undefined || num === null) return "";
    return Number(num).toLocaleString("es-MX");
  });

  eleventyConfig.addCollection("obras", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/obras/*.md").sort((a, b) => {
      return (a.data.order || 99) - (b.data.order || 99);
    });
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
