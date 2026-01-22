module.exports = {
  url:
    process.env.ELEVENTY_ENV === "development"
      ? "."
      : "/wp-content/themes/poverty-2017/stimulus-check",
  env: process.env.ELEVENTY_ENV === "development" ? "dev" : "prod"
};

