// To copy a text to clipboard
export default function (textToCopy: string | number) {
    const textarea = document.createElement("textarea")
    textarea.value = textToCopy.toString()
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand("copy")
    textarea.remove()
}