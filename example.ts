// to run this example, do `deno run --allow-read --allow-write example.ts`

import { decode, encode } from "./src/mod.ts";
const str = "constructor";
console.log();
// const encoded = encode(str);
const encoded = encode(str);
console.log("Encoded this string looks like: ", encoded);

console.log("We can look at each token and what it represents");
// for (const token of encoded) {
//   console.log({ token, string: decode([token]) });
// }
for (const token of encoded) {
  console.log({ token, string: decode([token]) });
}
console.log("We can decode it back into:", decode(encoded));
