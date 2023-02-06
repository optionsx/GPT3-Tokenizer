// `deno run --allow-read --allow-write example.ts`
import { decode, encode } from "https://deno.land/x/gpt/mod.ts";

const encoded = encode("biji heval, contrusctor");
console.log("tokenized result: ", encoded);
/*
tokenized result:  [
    65, 20770,  339,
  2100,    11, 3445,
   385,  2715
]
*/

for (let token of encoded) {
  console.log({ token, string: decode([token]) });
}
/*
{ token: 65, string: "b" }
{ token: 20770, string: "iji" }
{ token: 339, string: " he" }
{ token: 2100, string: "val" }
{ token: 11, string: "," }
{ token: 3445, string: " contr" }
{ token: 385, string: "us" }
{ token: 2715, string: "ctor" }
*/

const decoded = decode(encoded);
console.log("decoded:", decoded); // decoded: biji heval, contrusctor
