import https from "../utils/axios"

export async function products() {
    const params = {}
    const response = await https.get('/api/products', { params })
    return response?.data?.data
}