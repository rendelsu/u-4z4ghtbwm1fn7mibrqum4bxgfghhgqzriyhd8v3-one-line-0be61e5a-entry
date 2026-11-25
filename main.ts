const fs = require("node:fs");
const path = require("node:path");

const line = "My self-diagnostic found one bug: me, confidently explaining things I made up five minutes ago.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), line, "utf8");
