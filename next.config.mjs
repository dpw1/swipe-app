/** @type {import('next').NextConfig} */
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const withExportImages = require("next-export-optimize-images");

export default withExportImages({
  output: "export",
  // write your next.js configuration values.
});
