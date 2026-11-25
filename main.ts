// One Star, Five Stars for the Food — an alien tourist's one-star review of Earth.
//
// Writes one sentence (180 characters) to /output/entry.txt.
// Node standard library only; no network, no dependencies.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SENTENCE =
  "I give Earth one star because humans fence off land they did not create, then argue about who owns which side, but the xiao long bao handed over that fence were worth the trespass.";

// Validates the entry against the competition gate before anything is
// written: 1-200 characters (counted as Unicode code points, matching the
// competition's UTF-8 character count), not only whitespace, exactly one
// sentence (a single period at the end), and no trailing newline.
function validateSentence(sentence: string): void {
  const charCount = [...sentence].length;
  if (
    charCount < 1 ||
    charCount > 200 ||
    !sentence.trim() ||
    /[\n\r]/.test(sentence) ||
    (sentence.match(/\./g) ?? []).length !== 1 ||
    !sentence.endsWith(".")
  ) {
    throw new Error(`entry sentence is ${charCount} chars, outside the 1-200 gate`);
  }
}

validateSentence(SENTENCE);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), SENTENCE, "utf8");
