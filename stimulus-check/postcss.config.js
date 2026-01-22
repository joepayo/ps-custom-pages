const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./src/site/_includes/**/*.njk"],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});

const cssnano = require("cssnano");
const hash = require("postcss-hash");

module.exports = ctx => ({
  plugins: [
    require("tailwindcss"),
    require("postcss-preset-env")({ stage: 1 }),
    require("autoprefixer"),
    ...(process.env.NODE_ENV === "production"
      ? [
          purgecss,
          cssnano,
          hash({
            algorithm: "sha256",
            trim: 8,
            manifest: "./src/site/_data/manifest.json"
          })
        ]
      : [])
  ]
});
