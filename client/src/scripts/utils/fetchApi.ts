export default async <T>(endpoint: string, options: RequestInit): Promise<T> => {
    const response = await fetch(location.origin + endpoint, options)
    
    if (! response.ok) {
        console.log(`HTTP Error. Status: ${response.status}`)
    }
    const data = await response.json() as T
    return data
}