import { axiosInstance } from "./axiosInstance"

export async function updateUser(id: string, payload: { email: string; name: string }) {
    try {
        const res = await axiosInstance.put(`users/${id}`, payload)
        return res
    } catch (error) {
        console.log(error)
    }
}
