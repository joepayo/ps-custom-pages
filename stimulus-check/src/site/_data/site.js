module.exports = {
  url:
    process.env.ELEVENTY_ENV === "development"
      ? "."
      : "/wp-content/themes/poverty-2017/covid-stimulus",
  env: process.env.ELEVENTY_ENV === "development" ? "dev" : "prod"
};

