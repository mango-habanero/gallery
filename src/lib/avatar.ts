export function createFallbackAvatar (seed: string) {
    // TODO[MH]: These values should be configurable and come from the theme.

    const apiBaseUrl = "https://api.dicebear.com/9.x/initials/svg"
    const backgroundColor = "d927c7"
    const fontFamily = "sans-serif"
    const textColor = "ffffff"

    const url = new URL(`${apiBaseUrl}`)
    url.searchParams.set("backgroundColor", backgroundColor)
    url.searchParams.set("fontFamily", fontFamily)
    url.searchParams.set("textColor", textColor)
    url.searchParams.set("seed", seed)

    return url.toString()
}