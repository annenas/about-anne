module.exports = function (eleventyConfig) {
  // Copy Assets folder to /_site
  eleventyConfig.addPassthroughCopy("./src/assets/");

  // Copy favicon to root of /_site
  eleventyConfig.addPassthroughCopy("./src/favicon.ico");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    htmlTemplateEngine: "njk",
  };
};
