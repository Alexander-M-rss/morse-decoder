const morseTable = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    const charLength = 10;
    const data = expr.split('');
    const charsNumber = Math.ceil(data.length / charLength);
    const morseTableKeys = Object.keys(morseTable);
    let result = [...Array(charsNumber)].map((_, i) => '');

    result = result.map((char, i) => {
        char = data.slice(i * charLength, (i + 1) * charLength).join('');
        if (char[0] === '*') 
            char = ' ';
        else {
            char = char.replace(/^0+/gi, '');
            char = char.replace(/10/gi, '.');
            char = char.replace(/11/gi, '-');
            if (morseTableKeys.includes(char)) 
                char = morseTable[char];
            else
                char = ' ';
        }
        return char;
    });
    return result.join('');
}

module.exports = {
    decode,
};