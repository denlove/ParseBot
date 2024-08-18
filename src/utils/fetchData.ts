export const fetchData = async (url: string) => {
    const headers = new Headers()
    headers.set('Content-Type', 'text/plain')
    const options = {
        method: 'GET',
        headers,
    }

    let response

    try {
        response = await fetch(url, options)
    } catch (err) {
        console.log("Can't send request", err)
    }

    if (response?.ok) {
        return await response.text()
    } else {
        throw new Error(`HTTP error! Status: ${response?.status}`)
    }
}
