const fs = require("fs");

module.exports = eleventyConfig => {
  eleventyConfig.addPassthroughCopy({ "src/img": "img" });
  eleventyConfig.addPassthroughCopy({ "src/icons": "./" });

  // Filters.
  eleventyConfig.addFilter("numbersPlease", value => {
    return value.match(/([0-9])+/g).join([]);
  });

  // Shortcodes.
  eleventyConfig.addShortcode("currentYear", () => {
    return new Date().getFullYear().toString();
  });

  return {
    dir: {
      input: "src/site",
      output: "public"
    }
  };
};
