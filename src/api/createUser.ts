import { axiosInstance } from "./axiosInstance"
export type CreateUser = {
    name: string
    email: string
    password: string
    avatar: string
}
export async function createUser(payload: CreateUser) {
    // console.log(payload)

    try {
        const res = await axiosInstance.post("users", payload)
        console.log(payload)

        console.log(res)

        return res
    } catch (error) {
        console.log(error)
    }
}
