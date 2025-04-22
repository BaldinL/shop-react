import { axiosInstance } from "./axiosInstance"
export const getCategories = async () => {
    try {
        const res = await axiosInstance.get("categories")
        console.log(res.data)

        return res.data
    } catch (error) {
        console.log(error)
    }
}
