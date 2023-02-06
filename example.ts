// `deno run --allow-read --allow-write example.ts`
import { decode, encode } from "https://deno.land/x/gpt/mod.ts";

const str = "encode: biji heval, contrusctor";
const encoded = encode(str);
console.log("tokenized result: ", encoded);

console.log("We can look at each token and what it represents");
for (let token of encoded) {
  console.log({ token, string: decode([token]) });
}

const decoded = decode(encoded);
console.log("decoded:", decoded);
