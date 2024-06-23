export const formatData = (html: string) => {
    const body = html.match(/<h1.+<\/h1>/)?.join(' ')
    return body
}
// <div class="mw-content-ltr mw-parser-output"
