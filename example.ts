import { decode, encode } from "https://deno.land/x/gpt@1.0/mod.ts";

const tokenizeThis = "biji hevall, constructor";
console.log();
// const encoded = encode(str);
const encoded = encode(tokenizeThis);
console.log("tokenized: ", encoded);

console.log("We can look at each token and what it represents");
for (const token of encoded) {
  console.log({ token, string: decode([token]) });
}
console.log("decoded:", decode(encoded));
