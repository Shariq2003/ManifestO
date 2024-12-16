function calculateName(key) {
    const target = ((key - 1) % 25) + 1;

    let name = '';
    let sum = 0;

    for (let i = 0; i < target; i++) {
        if (sum + 1 <= target) {
            name += 'A';
            sum += 1;
        }
    }
    return name;
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

module.exports = { calculateName, decodeMessage };
