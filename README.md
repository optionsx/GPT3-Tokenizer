# Deno Port of GPT-3-Encoder
Deno(Typescript) BPE Encoder Decoder for GPT-2 / GPT-3
## About
i had to use this in a project, all [project1](https://deno.land/x/gpt_2_3_tokenizer)[project2](https://deno.land/x/clip_bpe) ports in deno had issues,
such as "constructor" word would break the tokenizer, 
so i ported a working nodejs(javascript) version to deno(typescript) and reformed the code abit.
## Usage

Compatible with Deno
```js
// to run below example, do `deno run --allow-read --allow-write fileName.ts`
import {
  decode,
  encode,
} from "https://raw.githubusercontent.com/optionsx/GPT-3-Encoder/master/src/mod.ts";

const str = 'encode: biji heval, contrusctor'
const encoded = encode(str)
console.log('tokenized result: ', encoded)

console.log('We can look at each token and what it represents')
for(let token of encoded){
  console.log({token, string: decode([token])})
}

const decoded = decode(encoded)
console.log('decoded:', decoded)

```


