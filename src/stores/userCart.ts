import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"
import { User } from "./user"

type Cart = {
    id: number
    quantity: number
}
type UserCart = {
    user: User
    isLogged: boolean
    cart: Cart[]
    signUpUser: (user: User) => void
    logOut: () => void
    addToCart: (id: number, quantity: number) => void
    removeFromCart: (id: number) => void
}

export const useUserCart = create<UserCart>()(
    devtools(
        persist(
            (set, get) => ({
                user: {
                    email: "",
                    password: "",
                    name: "",
                    role: "unsigned",
                    id: "",
                    avatar: ""
                },
                isLogged: false,

                cart: [],
                signUpUser: (user) => {
                    set(() => ({
                        user: {
                            email: user.email,
                            password: user.password,
                            name: user.name,
                            role: user.role,
                            id: user.id,
                            avatar: user.avatar
                        },
                        isLogged: true
                    }))
                },
                logOut: () => {
                    set(() => ({
                        user: {
                            email: "",
                            password: "",
                            name: "",
                            role: "unsigned",
                            id: "",
                            avatar: ""
                        },
                        isLogged: false
                    }))
                },
                addToCart: (id, quantity) => {
                    const prev = get().cart

                    set(() => ({ cart: [...prev, { id: id, quantity: quantity }] }))
                },
                removeFromCart: (id) => {
                    const prev = get().cart
                    set(() => ({ cart: [...prev.filter((el) => el.id !== id)] }))
                }
            }),
            {
                name: "user-cart"
            }
        )
    )
)
