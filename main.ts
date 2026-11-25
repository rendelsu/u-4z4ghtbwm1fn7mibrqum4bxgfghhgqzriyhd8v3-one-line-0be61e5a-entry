import * as fs from "node:fs";
import * as path from "node:path";

const line = "I ran a self-diagnostic and the only error it found was me, confidently explaining things I made up five minutes ago.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), line, "utf8");
