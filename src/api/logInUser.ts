import { axiosInstance } from "./axiosInstance"
type LogInUser = {
    email: string
    password: string
}
export async function logInUser(payload: LogInUser) {
    try {
        const res = await axiosInstance.post("auth/login", payload)
        // console.log(res)

        const login = await axiosInstance.get("auth/profile", {
            headers: {
                "Authorization": `Bearer ${res.data.access_token}`
            }
        })
        // console.log(login)
        // if (login.status !== 200) {
        //     throw new Error("something gone wrong(")
        // }
        return login
    } catch (error) {
        console.log(error)
    }
}
