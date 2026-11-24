// Production entry script for Developer Excuses
import * as fs from 'node:fs';
import * as path from 'node:path';

const ENTRY_TEXT = "The pull request passed our automated tests because our automated tests only assert that true equals true.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, 'entry.txt'), ENTRY_TEXT + '\n');
