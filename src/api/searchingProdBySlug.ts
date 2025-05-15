import { axiosInstance } from "./axiosInstance"

export async function searchProdBySlug(slug: string) {
    try {
        const res = axiosInstance.get(`products/?title=${slug}`)
        return res
    } catch (error) {
        console.log(error)
    }
}
