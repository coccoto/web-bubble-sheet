export default async (path: string): Promise<MstMenuType> => {
    const response = await fetch(location.origin + path, {
        method: 'post'
    })
    const data = await response.json()
    return await data
}