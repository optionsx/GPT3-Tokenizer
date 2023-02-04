# Deno Port of GPT-3-Encoder
Deno(Typescript) BPE Encoder Decoder for GPT-2 / GPT-3
## About
i was going to use one of the existing implementations of the GPT-3 encoder/decoder, but i wanted to use it in Deno, and none of the existing implementations were compatible with Deno. So i ported the original javascript implementation to Deno and typescript.
## Usage

Compatible with Deno
```js
// to run below example, do `deno run --allow-read --allow-write example.ts`
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
console.log('We can decode it back into:', decoded)

```


