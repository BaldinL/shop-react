export function createUrl(url: string, params: object[]) {
    let newUrl: string = url
    Object.entries(params).forEach(([key, value], i) => {
        const sign: string = !i ? "?" : "&"
        newUrl += `${sign}${key}=${value}`
    })
    return newUrl
}
