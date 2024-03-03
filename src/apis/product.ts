import axios from "axios"

export async function products() {
    const response = await axios.get("https://dummyjson.com/products")
    return response.data
}