export default async <T>(endpoint: string, options: RequestInit): Promise<T> => {
    try {
        const response = await fetch(location.origin + endpoint, options)
        if (! response.ok) {
            throw new Error(`HTTP Error. Status: ${response.status}`)
        }
        const data = await response.json() as T
        return data

    } catch (error) {
        console.error('fetch failed')
        return {} as T
    }
}
