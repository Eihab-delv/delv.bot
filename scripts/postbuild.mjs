// GitHub Pages serves out/404.html for unknown URLs. With separate English and
// Arabic root layouts, Next can't style its built-in 404, so use our own page.
import { copyFileSync, existsSync } from "node:fs";

const src = "out/page-not-found/index.html";
if (existsSync(src)) {
  copyFileSync(src, "out/404.html");
  console.log("postbuild: branded 404.html written");
}
