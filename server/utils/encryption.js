function calculateKey(name) {
    let k = 0;
    for (const ch of name) {
        if (/[a-zA-Z]/.test(ch)) {
            k += ch.toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0) + 1;
        }
    }
    return (k % 25) + 1;
}

function encodeMessage(msg, k) {
    const substitutions = {
        'a': '@', 'e': '3', 'i': '!', 'o': '0', 'u': '^',
        'A': '&', 'E': '#', 'I': '*', 'O': '(', 'U': ')'
    };

    return [...msg].map(ch => {
        if (/[a-zA-Z]/.test(ch)) {
            const base = ch >= 'a' ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
            ch = String.fromCharCode((ch.charCodeAt(0) - base + k) % 26 + base);
        }
        return substitutions[ch] || ch;
    }).join('');
}

module.exports = { calculateKey, encodeMessage };
