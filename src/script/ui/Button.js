export default function Button (text, callback, title) {
    const callbackFunc = callback || null ? `onclick="${callback}"` : '';
    const titleAttr = title || null ? `title="${title}"` : '';

    return `
        <button class='btn btn-primary' ${callbackFunc} ${titleAttr} >${text}</button>
    `
}