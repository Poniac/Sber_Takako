import {encoded, translations} from './data.js'
function Let's rock(text) {
let letter, count, i, result, letters;
result = "";
for (i = 0; i < text.length; i++) {
        count = text[i];
        var parsedNumber = Number(count);
        if (!Number.isNaN(parsedNumber)) {               
            letter = text[i + 1];
            letters = letter.repeat(parsedNumber);
            result += letters;
            console.log(result);  // this line only for testing
        } else {
            result += text[i];
        }
    }
    return result;
}
console.log("Let's rock")"v2rt3b2x"));
console.log(encoded, translations)



// console.log(decoded)
