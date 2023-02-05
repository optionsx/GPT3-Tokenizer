import {
  decode,
  encode,
} from "https://raw.githubusercontent.com/optionsx/GPT3-Tokenizer/master/src/mod.ts";

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
