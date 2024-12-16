function calculateKey(name) {
    let k = 0;
    for (const ch of name) {
        if (/[a-zA-Z]/.test(ch)) {
            k += ch.toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0) + 1;
        }
    }
    return (k % 25) + 1;
}

function decodeMessage(enc, k) {
    const reverseSubstitutions = {
        '@': 'a', '3': 'e', '!': 'i', '0': 'o', '^': 'u',
        '&': 'A', '#': 'E', '*': 'I', '(': 'O', ')': 'U'
    };

    return [...enc].map(ch => {
        ch = reverseSubstitutions[ch] || ch;
        if (/[a-zA-Z]/.test(ch)) {
            const base = ch >= 'a' ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
            ch = String.fromCharCode((ch.charCodeAt(0) - base - k + 26) % 26 + base);
        }
        return ch;
    }).join('');
}

module.exports = { calculateKey, decodeMessage };
