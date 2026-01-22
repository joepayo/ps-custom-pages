import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import buble from "@rollup/plugin-buble";
import outputManifest from "rollup-plugin-output-manifest";

import { terser } from "rollup-plugin-terser";

const production = !process.env.ROLLUP_WATCH;

export default [
  {
    input: "src/js/main.js",
    output: {
      sourcemap: production ? false : true,
      format: "iife",
      name: "app",
      dir: "public",
      entryFileNames: production ? "[name].[hash].js" : "[name].js"
    },
    plugins: [
      resolve(),
      commonjs(),
      buble(),

      // Minify if we're on prod.
      production && terser(),

      // Output a manifest entry if we're on prod.
      production &&
        outputManifest({
          fileName: "../src/site/_data/manifest.json",
          isMerge: true
        })
    ],
    watch: {
      clearScreen: false
    }
  }
];
