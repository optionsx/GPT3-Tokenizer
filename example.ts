// to run this example, do `deno run --allow-read --allow-write example.ts`

import {
  decode,
  encode,
} from "https://raw.githubusercontent.com/optionsx/GPT-3-Encoder/master/src/mod.ts";
// to run this example, do `deno run --allow-read --allow-write example.ts`

const str = "tokenize this, biji hevall, constructor";
console.log();
// const encoded = encode(str);
const encoded = encode(str);
console.log("tokenized: ", encoded);

console.log("We can look at each token and what it represents");
// for (const token of encoded) {
//   console.log({ token, string: decode([token]) });
// }
for (const token of encoded) {
  console.log({ token, string: decode([token]) });
}
console.log("decoded:", decode(encoded));
