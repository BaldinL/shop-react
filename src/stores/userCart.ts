import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"
import { User } from "./user"
type Cart = {
    id: number
    quantity: number
}
type UserCart = {
    user: User
    cart: Cart[]
    signUpUser: (user: User) => void
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
                    role: "customer",
                    id: ""
                },
                cart: [],
                signUpUser: (user) => {
                    set(() => ({
                        user: {
                            email: user.email,
                            password: user.password,
                            name: user.name,
                            role: user.role,
                            id: user.id
                        }
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
