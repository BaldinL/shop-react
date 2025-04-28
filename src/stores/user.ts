// import { create } from "zustand"
// import { persist } from "zustand/middleware"

export type User = {
    email: string
    password: string
    name: string
    role: "customer" | "admin"
    id: string
}
// type UseUser = {
//     user: User
// }
// export const useUser = create<UseUser>()(
//     persist(
//         (set, get) => ({
//             user: {}
//         }),
//         {
//             name: "user"
//         }
//     )
// )
