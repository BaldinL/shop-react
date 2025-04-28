import { axiosInstance } from "./axiosInstance"

export async function getOneProd(id: number) {
    try {
        const res = await axiosInstance.get(`products/${id}`)
        return res
    } catch (error) {
        console.log(error)
    }
}
