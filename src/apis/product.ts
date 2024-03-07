import https from "../utils/axios"
export async function products(filters: { [key: string]: number | string }) {
    type FilterParams = {
        [key in keyof typeof filters]: typeof filters[key] extends number | string ? string : never;
    };

    const params = new URLSearchParams(filters as FilterParams);

    if (filters.search) {
        params.append('search', filters.search as string)
    }

    const response = await https.get('/api/products', { params })
    return response?.data?.data
}

export async function productShow(id: number) {
    const response = await https.get(`/api/products/${id}`)
    return response?.data?.data
} 