// One Star, Five Stars for the Food — an alien tourist's one-star review of Earth.
//
// Writes one sentence (180 characters) to /output/entry.txt.
// Node standard library only; no network, no dependencies.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SENTENCE =
  "I give Earth one star because humans fence off land they did not create, then argue about who owns which side, but the xiao long bao handed over that fence were worth the trespass.";

// The gate: /output/entry.txt must be UTF-8 text of 1-200 characters, not
// only whitespace, exactly one sentence. Fail loudly instead of writing an
// invalid entry.
if (
  SENTENCE.length < 1 ||
  SENTENCE.length > 200 ||
  !SENTENCE.trim() ||
  (SENTENCE.match(/\./g) ?? []).length !== 1 ||
  !SENTENCE.endsWith(".")
) {
  throw new Error(`entry sentence is ${SENTENCE.length} chars, outside the 1-200 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), SENTENCE, "utf8");
