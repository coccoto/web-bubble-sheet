export default async <T>(endpoint: string, options: RequestInit): Promise<T> => {
    const requestUrl = location.origin + endpoint

    try {
        const response = await fetch(requestUrl, options)
        if (! response.ok) {
            console.log('An error occurred in fetchRequest. requestUrl: ' + requestUrl)
        }
        const data = await response.json() as T
        console.log('fetchRequest is complete. requestUrl: ' + requestUrl)
        return data

    } catch (error) {
        console.log('An error occurred in fetchRequest. requestUrl: ' + requestUrl)
        return {} as T
    }
}
