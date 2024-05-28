// JSONパーサー関数
function parseJSON(json) {
    let index = 0;

    function parseValue() {
        skipWhitespace();
        if (json[index] === '{') {
            return parseObject();
        } else if (json[index] === '[') {
            return parseArray();
        } else if (json[index] === '"') {
            return parseString();
        } else if (json[index] === 't' || json[index] === 'f') {
            return parseBoolean();
        } else if (json[index] === 'n') {
            return parseNull();
        } else {
            return parseNumber();
        }
    }

    function parseObject() {
        const obj = {};
        index++; // skip '{'
        skipWhitespace();
        if (json[index] === '}') {
            index++; // skip '}'
            return obj;
        }
        while (true) {
            skipWhitespace();
            const key = parseString();
            skipWhitespace();
            if (json[index] !== ':') throw new SyntaxError(`Expected ':' at position ${index}`);
            index++; // skip ':'
            skipWhitespace();
            const value = parseValue();
            obj[key] = value;
            skipWhitespace();
            if (json[index] === '}') {
                index++; // skip '}'
                break;
            }
            if (json[index] !== ',') throw new SyntaxError(`Expected ',' at position ${index}`);
            index++; // skip ','
        }
        return obj;
    }

    function parseArray() {
        const arr = [];
        index++; // skip '['
        skipWhitespace();
        if (json[index] === ']') {
            index++; // skip ']'
            return arr;
        }
        while (true) {
            skipWhitespace();
            const value = parseValue();
            arr.push(value);
            skipWhitespace();
            if (json[index] === ']') {
                index++; // skip ']'
                break;
            }
            if (json[index] !== ',') throw new SyntaxError(`Expected ',' at position ${index}`);
            index++; // skip ','
        }
        return arr;
    }

    function parseString() {
        let str = '';
        index++; // skip opening '"'
        while (json[index] !== '"') {
            if (index >= json.length) throw new SyntaxError('Unexpected end of input in string');
            if (json[index] === '\\') {
                index++;
                const escapeChars = {
                    '"': '"',
                    '\\': '\\',
                    '/': '/',
                    b: '\b',
                    f: '\f',
                    n: '\n',
                    r: '\r',
                    t: '\t',
                    u: () => {
                        let hex = json.slice(index + 1, index + 5);
                        if (!/^[0-9a-fA-F]{4}$/.test(hex)) throw new SyntaxError(`Invalid Unicode escape at position ${index}`);
                        index += 4;
                        return String.fromCharCode(parseInt(hex, 16));
                    }
                };
                const escapeChar = escapeChars[json[index]];
                if (typeof escapeChar === 'function') {
                    str += escapeChar();
                } else if (escapeChar) {
                    str += escapeChar;
                } else {
                    throw new SyntaxError(`Invalid escape character at position ${index}`);
                }
            } else {
                str += json[index];
            }
            index++;
        }
        index++; // skip closing '"'
        return str;
    }

    function parseNumber() {
        const start = index;
        if (json[index] === '-') index++;
        if (json[index] === '0') {
            index++;
        } else if (/[1-9]/.test(json[index])) {
            while (/[0-9]/.test(json[index])) index++;
        } else {
            throw new SyntaxError(`Unexpected character at position ${index}`);
        }
        if (json[index] === '.') {
            index++;
            if (!/[0-9]/.test(json[index])) throw new SyntaxError(`Unexpected character at position ${index}`);
            while (/[0-9]/.test(json[index])) index++;
        }
        if (json[index] === 'e' || json[index] === 'E') {
            index++;
            if (json[index] === '+' || json[index] === '-') index++;
            if (!/[0-9]/.test(json[index])) throw new SyntaxError(`Unexpected character at position ${index}`);
            while (/[0-9]/.test(json[index])) index++;
        }
        return parseFloat(json.slice(start, index));
    }

    function parseBoolean() {
        if (json.startsWith('true', index)) {
            index += 4; // skip 'true'
            return true;
        } else if (json.startsWith('false', index)) {
            index += 5; // skip 'false'
            return false;
        } else {
            throw new SyntaxError(`Unexpected token at position ${index}`);
        }
    }

    function parseNull() {
        if (json.startsWith('null', index)) {
            index += 4; // skip 'null'
            return null;
        } else {
            throw new SyntaxError(`Unexpected token at position ${index}`);
        }
    }

    function skipWhitespace() {
        while (/\s/.test(json[index])) {
            index++;
        }
    }

    const result = parseValue();
    skipWhitespace();
    if (index !== json.length) {
        throw new SyntaxError(`Unexpected token at position ${index}`);
    }
    return result;
}
module.exports = { parseJSON };

const jsonString = process.argv[2];
try {
    const parsed = parseJSON(jsonString);
    console.log(JSON.stringify(parsed, null, 2)); // 整形
    // console.log(parsed);
} catch (e) {
    console.error('Error parsing JSON:', e.message);
}
