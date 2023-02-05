# Deno Port of GPT-3-Encoder
BPE Encoder Decoder for GPT-2 / GPT-3
## About
**i needed gpt tokenizers for a personal peroject,
all others projects([gpt_2_3_tokenizer](https://deno.land/x/gpt_2_3_tokenizer),[clip_bpe](https://deno.land/x/clip_bpe)) had issue,<br>
such as "constructor" word would break the tokenizer,<br>
so i ported a working [gpt-3-encoder](https://www.npmjs.com/package/gpt-3-encoder) module from nodejs(js) to deno(ts) and reformed the internals abit**
## Usage
deno 1.30.2</br>
v8 10.9.194.5</br>
typescript 4.9.4</br>
```js
// `deno run --allow-read --allow-write example.ts`
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
