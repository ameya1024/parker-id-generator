const generatedCodes = new Set();

function generateCode() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';

    do {
        code = '';
        for (let i = 0; i < 5; i++) {
            code += chars.charAt(Math.floor(Math.random() * chars.length));
        }
    } while (generatedCodes.has(code));

    generatedCodes.add(code);
    document.getElementById('code').textContent = code;
}
