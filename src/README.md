# Deno Port of GPT-3-Encoder
BPE Encoder Decoder for GPT-2 / GPT-3
## About
**i needed gpt tokenizer for a personal peroject,
all others projects([gpt_2_3_tokenizer](https://deno.land/x/gpt_2_3_tokenizer),[clip_bpe](https://deno.land/x/clip_bpe)) had issue,<br>
they would break at encoding "constructor" word,<br>
so i ported a working [gpt-3-encoder](https://www.npmjs.com/package/gpt-3-encoder) module from nodejs(js) to deno(ts) and reformed the internals abit**
## Usage
deno 1.30.2</br>
v8 10.9.194.5</br>
typescript 4.9.4</br>
```js
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

```
