export default async (path: string): Promise<any> => {
    const response = await fetch(location.origin + path, {
        method: 'post'
    })
    const data = await response.json()
    return await data
}