import { axiosInstance } from "./axiosInstance"
export type CreateUser = {
    name: string
    email: string
    password: string
    avatar: string
}
export async function createUser(payload: CreateUser) {
    try {
        const res = await axiosInstance.post("users", payload)
        return res
    } catch (error) {
        console.log(error)
    }
}
